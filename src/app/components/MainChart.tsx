import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { filterData, DataRow } from "@/data/inequalityData";
import { useResponsiveChartDimensions } from "./hooks/useResponsiveChartDimensions";

interface SelectedGroups {
  top10: boolean;
  bottom50: boolean;
  top_1: boolean;
}

interface MainChartProps {
  selectedGroups: SelectedGroups;
  setSelectedGroups: (groups: SelectedGroups) => void;
  filters: any;
}

interface TooltipData {
  year: string;
  values: {
    group: string;
    value: string;
    color: string;
  }[];
}

export function MainChart({
  selectedGroups,
  setSelectedGroups,
  filters,
}: MainChartProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [tooltipData, setTooltipData] = useState<TooltipData | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const chartDims = useResponsiveChartDimensions(containerRef);

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    // Get filtered data based on country/region
    let data = filterData(
      filters.country === "All" ? undefined : filters.country,
      filters.region === "All" ? undefined : filters.region,
    );

    // If multiple countries/regions, aggregate the data by year
    const aggregatedData = new Map<number, DataRow>();
    data.forEach((row) => {
      const existing = aggregatedData.get(row.year);
      if (!existing) {
        aggregatedData.set(row.year, { ...row });
      } else {
        // Average the values
        existing.bottom_50 = (existing.bottom_50 + row.bottom_50) / 2;
        existing.top_10 = (existing.top_10 + row.top_10) / 2;
        existing.top_1 = (existing.top_1 + row.top_1) / 2;
      }
    });

    const chartData = Array.from(aggregatedData.values()).sort(
      (a, b) => a.year - b.year,
    );

    if (chartData.length === 0) return;

    const startYear = chartData[0].year;
    const endYear = chartData[chartData.length - 1].year;

    // Transform data based on y-axis selection
    const transformedData = chartData.map((d) => ({
      ...d,
      top_10: d.top_10 * 100,
      bottom_50: d.bottom_50 * 100,
      top_1: d.top_1 * 100,
    }));

    // Use responsive dimensions from hook
    const { containerWidth, chartHeight, margins } = chartDims;
    const width = containerWidth - margins.left - margins.right;
    const height = chartHeight - margins.top - margins.bottom;

    // Clear previous content and reset SVG
    const svgElement = d3.select(svgRef.current);
    svgElement.selectAll("*").remove();
    svgElement
      .attr("viewBox", `0 0 ${containerWidth} ${chartHeight}`)
      .attr("preserveAspectRatio", "xMidYMid meet")
      .style("max-width", "100%")
      .style("height", "auto")
      .style("display", "block");

    const svg = svgElement
      .append("g")
      .attr("transform", `translate(${margins.left},${margins.top})`);

    // Scales
    const x = d3.scaleLinear().domain([startYear, endYear]).range([0, width]);

    // Set y-axis domain and format
    const yDomain: [number, number] = [0, 100];
    const yTickFormat = (d: any) => d + "%";

    const y = d3.scaleLinear().domain(yDomain).range([height, 0]);

    // Line generators
    const lineTop10 = d3
      .line<DataRow>()
      .x((d) => x(d.year))
      .y((d) => y(d.top_10))
      .curve(d3.curveMonotoneX);

    const lineBottom50 = d3
      .line<DataRow>()
      .x((d) => x(d.year))
      .y((d) => y(d.bottom_50))
      .curve(d3.curveMonotoneX);

    const lineTop1 = d3
      .line<DataRow>()
      .x((d) => x(d.year))
      .y((d) => y(d.top_1))
      .curve(d3.curveMonotoneX);

    // Draw lines

    if (selectedGroups.top_1) {
      svg
        .append("path")
          .datum(transformedData)
          .attr("fill", "none")
          .attr("stroke", "#bdea00")
          .attr("stroke-width", 2.5)
          .attr("d", lineTop1);
    }
    if (selectedGroups.top10) {
      svg
        .append("path")
        .datum(transformedData)
        .attr("fill", "none")
        .attr("stroke", "#00ff9c")
        .attr("stroke-width", 2)
        .attr("d", lineTop10);
    }
    if (selectedGroups.bottom50) {
      svg
        .append("path")
        .datum(transformedData)
        .attr("fill", "none")
        .attr("stroke", "#ff00b7")
        .attr("stroke-width", 2.5)
        .attr("d", lineBottom50);
    }

    // Add invisible overlay for mouse tracking
    const bisect = d3.bisector((d: DataRow) => d.year).left;

    const verticalLine = svg
      .append("line")
      .attr("stroke", "#64748b")
      .attr("stroke-width", 1)
      .attr("stroke-dasharray", "3,3")
      .style("opacity", 0);

    const focusCircles = svg.append("g");

    svg
      .append("rect")
      .attr("width", width)
      .attr("height", height)
      .attr("fill", "none")
      .attr("pointer-events", "all")
      .on("mousemove", function (event) {
        const [mouseX] = d3.pointer(event);
        const year = Math.round(x.invert(mouseX));
        const index = bisect(transformedData, year);

        if (index >= 0 && index < transformedData.length) {
          const d = transformedData[index];

          // Show vertical line
          verticalLine
            .attr("x1", x(d.year))
            .attr("x2", x(d.year))
            .attr("y1", 0)
            .attr("y2", height)
            .style("opacity", 1);

          // Show circles
          focusCircles.selectAll("*").remove();

          if (selectedGroups.top10) {
            focusCircles
              .append("circle")
              .attr("cx", x(d.year))
              .attr("cy", y(d.top_10))
              .attr("r", 4.5)
              .attr("fill", "#00ff9c");
          }
          if (selectedGroups.bottom50) {
            focusCircles
              .append("circle")
              .attr("cx", x(d.year))
              .attr("cy", y(d.bottom_50))
              .attr("r", 4.5)
              .attr("fill", "#ff00b7");
          }
          if (selectedGroups.top_1) {
            focusCircles
              .append("circle")
              .attr("cx", x(d.year))
              .attr("cy", y(d.top_1))
              .attr("r", 4.5)
              .attr("fill", "#bdea00");
          }

          // Update tooltip data
          setTooltipData({
            year: `${d.year}`,
            values: [
              {
                group: "Bottom 50%",
                value: d.bottom_50.toFixed(1) + "%",
                color: "#ff00b7",
              },
              {
                group: "Top 10%",
                value: d.top_10.toFixed(1) + "%",
                color: "#00ff9c",
              },
              {
                group: "Top 1%",
                value: d.top_1.toFixed(1) + "%",
                color: "#bdea00",
              },
            ],
          });

          // Position tooltip with boundary detection
          const rect = containerRef.current!.getBoundingClientRect();
          let tooltipX = event.clientX - rect.left + 20;
          let tooltipY = event.clientY - rect.top - 100;

          // Tooltip approximate dimensions
          const tooltipWidth = isMobile ? 140 : 180;
          const tooltipHeight = 120;

          // Prevent right overflow
          if (tooltipX + tooltipWidth > rect.width) {
            tooltipX = Math.max(
              10,
              event.clientX - rect.left - tooltipWidth - 20,
            );
          }

          // Prevent top overflow
          if (tooltipY < 10) {
            tooltipY = event.clientY - rect.top + 20;
          }

          // Prevent bottom overflow
          if (tooltipY + tooltipHeight > rect.height) {
            tooltipY = Math.max(
              10,
              event.clientY - rect.top - tooltipHeight - 20,
            );
          }

          setTooltipPosition({
            x: tooltipX,
            y: tooltipY,
          });
        }
      })
      .on("mouseleave", function () {
        verticalLine.style("opacity", 0);
        focusCircles.selectAll("*").remove();
        setTooltipData(null);
      });

    // Add axes
    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(
        d3
          .axisBottom(x)
          .tickFormat((d) => d.toString())
          .tickSize(0)
          .tickPadding(chartDims.tickPadding)
          .ticks(4),
      )
      .call((g) => g.select(".domain").remove())
      .style("color", "#d7dcf0")
      .style("font-size", chartDims.tickFontSize);

    svg
      .append("g")
      .call(
        d3
          .axisLeft(y)
          .tickFormat(yTickFormat)
          .tickSize(0)
          .tickPadding(chartDims.tickPadding)
          .ticks(4),
      )
      .call((g) => g.select(".domain").remove())
      .style("color", "#d7dcf0")
      .style("font-size", chartDims.tickFontSize);
  }, [selectedGroups, filters, chartDims]);

  const isMobile = chartDims.containerWidth < 640;

  return (
    <div className="relative">
      {/* Legend */}
      <div
        className={`px-2 mt-6 sm:mt-5 mb-2 ${
          isMobile
            ? "flex flex-col gap-3"
            : `flex gap-${chartDims.legendGap} text-${chartDims.legendTextSize}`
        } ${chartDims.legendTextSize}`}
      >
        <button
          onClick={() =>
            setSelectedGroups({
              ...selectedGroups,
              bottom50: !selectedGroups.bottom50,
            })
          }
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <span
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${selectedGroups.bottom50 ? "bg-[#ff00b7]" : "bg-gray-600"}`}
          ></span>
          <span className="text-xs sm:text-sm">Bottom 50%</span>
        </button>
        <button
          onClick={() =>
            setSelectedGroups({
              ...selectedGroups,
              top10: !selectedGroups.top10,
            })
          }
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <span
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${selectedGroups.top10 ? "bg-[#00ff9c]" : "bg-gray-600"}`}
          ></span>
          <span className="text-xs sm:text-sm">Top 10%</span>
        </button>
        <button
          onClick={() =>
            setSelectedGroups({
              ...selectedGroups,
              top_1: !selectedGroups.top_1,
            })
          }
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <span
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${selectedGroups.top_1 ? "bg-[#bdea00]" : "bg-gray-600"}`}
            style={{
              border: selectedGroups.top_1 ? "1px dashed white" : "none",
            }}
          ></span>
          <span className="text-xs sm:text-sm">Top 1%</span>
        </button>
      </div>

      {/* Chart */}
      <div
        ref={containerRef}
        className="bg-[#020b0c] rounded-lg p-3 sm:p-4 relative w-full overflow-hidden"
      >
        <svg ref={svgRef}></svg>

        {/* Tooltip */}
        {tooltipData && (
          <div
            className="absolute pointer-events-none bg-[#020b0c] border border-[#0a6167] rounded-lg p-2 sm:p-3 shadow-xl text-xs sm:text-sm"
            style={{
              left: `${tooltipPosition.x}px`,
              top: `${tooltipPosition.y}px`,
              zIndex: 1000,
              maxWidth: isMobile ? "140px" : "auto",
            }}
          >
            <div className="text-gray-300 mb-1.5 sm:mb-2 font-semibold">
              {tooltipData.year}
            </div>
            <table className="text-xs sm:text-sm">
              <tbody>
                {tooltipData.values.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-[#0a6167]/50 last:border-0"
                  >
                    <td className="py-1 sm:py-1.5 pr-2 sm:pr-4">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span
                          className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: row.color }}
                        ></span>
                        <span className="text-[#e5e6ed] whitespace-nowrap text-xs sm:text-sm">
                          {row.group}
                        </span>
                      </div>
                    </td>
                    <td className="text-right py-1 sm:py-1.5 pl-1 sm:pl-4 text-[#e5e6ed] font-semibold">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
