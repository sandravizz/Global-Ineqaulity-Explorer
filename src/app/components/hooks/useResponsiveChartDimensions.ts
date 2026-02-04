import { useEffect, useState } from 'react';

export interface ChartDimensions {
  containerWidth: number;
  chartHeight: number;
  margins: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
  tickFontSize: string;
  tickPadding: number;
  legendGap: string;
  legendTextSize: string;
}

/**
 * Hook to calculate responsive chart dimensions based on container width
 * Implements mobile-first approach with breakpoints at 640px, 1024px
 */
export const useResponsiveChartDimensions = (
  containerRef: React.RefObject<HTMLDivElement>,
): ChartDimensions => {
  const [dimensions, setDimensions] = useState<ChartDimensions>({
    containerWidth: 0,
    chartHeight: 500,
    margins: { top: 20, right: 50, bottom: 20, left: 50 },
    tickFontSize: '12px',
    tickPadding: 20,
    legendGap: '7',
    legendTextSize: 'text-sm',
  });

  useEffect(() => {
    if (!containerRef.current) return;

    const updateDimensions = () => {
      const container = containerRef.current;
      if (!container) return;

      const width = container.offsetWidth;

      // Mobile: < 640px
      if (width < 640) {
        setDimensions({
          containerWidth: width,
          chartHeight: 300,
          margins: {
            top: 15,
            right: 60,
            bottom: 50,
            left: 35,
          },
          tickFontSize: '10px',
          tickPadding: 8,
          legendGap: '3',
          legendTextSize: 'text-xs',
        });
        return;
      }

      // Tablet: 640px - 1023px
      if (width < 1024) {
        setDimensions({
          containerWidth: width,
          chartHeight: 400,
          margins: {
            top: 18,
            right: 40,
            bottom: 100,
            left: 40,
          },
          tickFontSize: '11px',
          tickPadding: 12,
          legendGap: '5',
          legendTextSize: 'text-sm',
        });
        return;
      }

      // Desktop: >= 1024px
      setDimensions({
        containerWidth: width,
        chartHeight: 500,
        margins: {
          top: 20,
          right: 50,
          bottom: 50,
          left: 50,
        },
        tickFontSize: '12px',
        tickPadding: 20,
        legendGap: '7',
        legendTextSize: 'text-sm',
      });
    };

    // Initial calculation
    updateDimensions();

    // Use ResizeObserver for better performance than window resize
    const observer = new ResizeObserver(() => {
      updateDimensions();
    });

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [containerRef]);

  return dimensions;
};
