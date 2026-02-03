import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { filterData, DataRow } from "@/data/inequalityData";

interface SelectedGroups {
  top10: boolean;
  middle40: boolean;
  bottom50: boolean;
  total: boolean;
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
        existing.middle_40 = (existing.middle_40 + row.middle_40) / 2;
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
    const transformedData = chartData.map((d) => {
      const baseData = chartData[0]; // Use first year as base

      if (filters.yAxis === "Income Share") {
        return {
          ...d,
          top_10: d.top_10 * 100,
          middle_40: d.middle_40 * 100,
          bottom_50: d.bottom_50 * 100,
          top_1: d.top_1 * 100,
        };
      } else if (filters.yAxis === "Real Income Growth") {
        return {
          ...d,
          top_10: ((d.top_10 - baseData.top_10) / baseData.top_10) * 100,
          middle_40:
            ((d.middle_40 - baseData.middle_40) / baseData.middle_40) * 100,
          bottom_50:
            ((d.bottom_50 - baseData.bottom_50) / baseData.bottom_50) * 100,
          top_1: ((d.top_1 - baseData.top_1) / baseData.top_1) * 100,
        };
      } else {
        // Income Level
        const baseIncome = 50000;
        return {
          ...d,
          top_10: baseIncome * d.top_10 * 3,
          middle_40: baseIncome * d.middle_40 * 2,
          bottom_50: baseIncome * d.bottom_50 * 1.5,
          top_1: baseIncome * d.top_1 * 5,
        };
      }
    });

    // Get container dimensions
    const containerWidth = containerRef.current.offsetWidth;
    const margin = { top: 20, right: 20, bottom: 60, left: 70 };
    const width = containerWidth - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    // Clear previous content and reset SVG
    const svgElement = d3.select(svgRef.current);
    svgElement.selectAll("*").remove();
    svgElement
      .attr("width", containerWidth)
      .attr("height", 500)
      .attr("viewBox", null)
      .attr("preserveAspectRatio", null);

    const svg = svgElement
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Scales
    const x = d3.scaleLinear().domain([startYear, endYear]).range([0, width]);

    // Set y-axis domain based on y-axis type
    let yDomain: [number, number];
    let yTickFormat: (d: any) => string;

    if (filters.yAxis === "Income Share") {
      yDomain = [0, 100];
      yTickFormat = (d) => d + "%";
    } else if (filters.yAxis === "Real Income Growth") {
      yDomain = [-50, 150];
      yTickFormat = (d) => d + "%";
    } else {
      // Income Level
      yDomain = [0, 200000];
      yTickFormat = (d) => "$" + d / 1000 + "k";
    }

    const y = d3.scaleLinear().domain(yDomain).range([height, 0]);

    // Line generators
    const lineTop10 = d3
      .line<DataRow>()
      .x((d) => x(d.year))
      .y((d) => y(d.top_10))
      .curve(d3.curveMonotoneX);

    const lineMiddle40 = d3
      .line<DataRow>()
      .x((d) => x(d.year))
      .y((d) => y(d.middle_40))
      .curve(d3.curveMonotoneX);

    const lineBottom50 = d3
      .line<DataRow>()
      .x((d) => x(d.year))
      .y((d) => y(d.bottom_50))
      .curve(d3.curveMonotoneX);

    const lineTotal = d3
      .line<DataRow>()
      .x((d) => x(d.year))
      .y((d) => y(d.top_1))
      .curve(d3.curveMonotoneX);

    // Draw lines
    if (selectedGroups.top10) {
      svg
        .append("path")
        .datum(transformedData)
        .attr("fill", "none")
        .attr("stroke", "#00ff9c")
        .attr("stroke-width", 2)
        .attr("d", lineTop10);
    }

    if (selectedGroups.middle40) {
      svg
        .append("path")
        .datum(transformedData)
        .attr("fill", "none")
        .attr("stroke", "#3b82f6")
        .attr("stroke-width", 2.5)
        .attr("d", lineMiddle40);
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

    if (selectedGroups.total) {
      svg
        .append("path")
        .datum(transformedData)
        .attr("fill", "none")
        .attr("stroke", "#fff")
        .attr("stroke-width", 2.5)
        .attr("stroke-dasharray", "5,5")
        .attr("d", lineTotal);
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
              .attr("r", 4)
              .attr("fill", "#00ff9c");
          }
          if (selectedGroups.middle40) {
            focusCircles
              .append("circle")
              .attr("cx", x(d.year))
              .attr("cy", y(d.middle_40))
              .attr("r", 4)
              .attr("fill", "#3b82f6");
          }
          if (selectedGroups.bottom50) {
            focusCircles
              .append("circle")
              .attr("cx", x(d.year))
              .attr("cy", y(d.bottom_50))
              .attr("r", 4)
              .attr("fill", "#ff00b7");
          }
          if (selectedGroups.total) {
            focusCircles
              .append("circle")
              .attr("cx", x(d.year))
              .attr("cy", y(d.top_1))
              .attr("r", 4)
              .attr("fill", "#fff");
          }

          // Update tooltip data
          setTooltipData({
            year: `${d.year}`,
            values: [
              {
                group: "Top 10%",
                value: d.top_10.toFixed(1) + "%",
                color: "#00ff9c",
              },
              {
                group: "Middle 40%",
                value: d.middle_40.toFixed(1) + "%",
                color: "#3b82f6",
              },
              {
                group: "Bottom 50%",
                value: d.bottom_50.toFixed(1) + "%",
                color: "#ff00b7",
              },
              {
                group: "Top 1%",
                value: d.top_1.toFixed(1) + "%",
                color: "#fff",
              },
            ],
          });

          // Position tooltip
          const rect = containerRef.current!.getBoundingClientRect();
          setTooltipPosition({
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
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
      .tickPadding(20)
      .ticks(4),
  )
  .call((g) => g.select(".domain").remove())
  .style("color", "#d7dcf0")
  .style("font-size", "12px");

    svg
      .append("g")
      .call(
        d3
          .axisLeft(y)
          .tickFormat(yTickFormat)
          .tickSize(0)
          .tickPadding(20)
          .ticks(4),
      )
        .call((g) => g.select(".domain").remove())
      .style("color", "#d7dcf0")
      .style("font-size", "12px");
  }, [selectedGroups, filters]);

  return (
    <div className="relative">
      {/* Legend */}
      <div className="flex gap-6 mb-4 text-sm">
        <button
          onClick={() =>
            setSelectedGroups({
              ...selectedGroups,
              top10: !selectedGroups.top10,
            })
          }
          className="flex items-center gap-2 hover:opacity-80"
        >
          <span
            className={`w-3 h-3 rounded-full ${selectedGroups.top10 ? "bg-[#00ff9c]" : "bg-gray-600"}`}
          ></span>
          Top 10%
        </button>
        <button
          onClick={() =>
            setSelectedGroups({
              ...selectedGroups,
              middle40: !selectedGroups.middle40,
            })
          }
          className="flex items-center gap-2 hover:opacity-80"
        >
          <span
            className={`w-3 h-3 rounded-full ${selectedGroups.middle40 ? "bg-blue-500" : "bg-gray-600"}`}
          ></span>
          Middle 40%
        </button>
        <button
          onClick={() =>
            setSelectedGroups({
              ...selectedGroups,
              bottom50: !selectedGroups.bottom50,
            })
          }
          className="flex items-center gap-2 hover:opacity-80"
        >
          <span
            className={`w-3 h-3 rounded-full ${selectedGroups.bottom50 ? "bg-[#ff00b7]" : "bg-gray-600"}`}
          ></span>
          Bottom 50%
        </button>
        <button
          onClick={() =>
            setSelectedGroups({
              ...selectedGroups,
              total: !selectedGroups.total,
            })
          }
          className="flex items-center gap-2 hover:opacity-80"
        >
          <span
            className={`w-3 h-3 rounded-full ${selectedGroups.total ? "bg-white" : "bg-gray-600"}`}
            style={{
              border: selectedGroups.total ? "1px dashed white" : "none",
            }}
          ></span>
          Top 1%
        </button>
      </div>

      {/* Chart */}
      <div
        ref={containerRef}
        className="bg-[#020b0c] rounded-lg p-4 relative w-full"
        style={{ maxWidth: "100%", overflow: "hidden" }}
      >
        <svg ref={svgRef} style={{ display: "block", maxWidth: "100%" }}></svg>

        {/* Tooltip */}
        {tooltipData && (
          <div
            className="absolute pointer-events-none bg-[#020b0c] border border-gray-600 rounded-lg p-3 shadow-xl"
            style={{
              left: tooltipPosition.x + 20,
              top: tooltipPosition.y - 100,
              zIndex: 1000,
            }}
          >
            <div className="text-xs text-gray-300 mb-2">
              {tooltipData.year} | Real Factor Income Growth
            </div>
            <table className="text-xs">
              <thead>
                <tr className="text-gray-400 border-b border-gray-600">
                  <th className="text-left pb-1 pr-4">Group</th>
                  <th className="text-right pb-1 pr-4">Income Growth</th>
                </tr>
              </thead>
              <tbody>
                {tooltipData.values.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-700 last:border-0"
                  >
                    <td className="py-1.5 pr-4">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: row.color }}
                        ></span>
                        <span className="text-white">{row.group}</span>
                      </div>
                    </td>
                    <td className="text-right py-1.5 pr-4 text-white">
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
