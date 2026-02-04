# Responsive Design Implementation Plan

## Overview
Make the Global Inequality Explorer fully responsive across all screen sizes (mobile: 320px, tablet: 768px, desktop: 1024px+), with focus on chart rendering, filter panel layout, and overall page structure.

---

## 1. Layout Architecture Changes

### Current Issues
- Fixed max-width container (1600px) doesn't adapt to small screens
- Hard-coded margins and dimensions in D3 chart (margin: `{top: 20, right: 200, bottom: 60, left: 50}`, fixed height: 500px)
- Grid-based filter panel uses `grid-cols-12` which doesn't stack on mobile
- Header padding/sizing doesn't scale
- No breakpoint-specific layouts

### Implementation Strategy

#### 1.1 Create a Layout Wrapper Component
**File**: `src/app/components/ResponsiveLayout.tsx`
- Define screen-size constants
- Provide responsive padding/margin values
- Create context or hook for breakpoint-aware dimensions

```typescript
// Breakpoints
const BREAKPOINTS = {
  mobile: 320,
  tablet: 768,
  desktop: 1024,
  wide: 1400,
};

// Responsive sizing
const getResponsiveDimensions = (width: number) => {
  if (width < 768) return { px: 3, py: 3 }; // Mobile: px-3 (12px)
  if (width < 1024) return { px: 4, py: 4 }; // Tablet: px-4 (16px)
  return { px: 6, py: 6 }; // Desktop: px-6 (24px)
};
```

#### 1.2 Update App.tsx Container
- Replace fixed `max-w-[1600px]` with responsive behavior
- Adjust padding breakpoints: `px-3 md:px-4 lg:px-6`
- Add min-height for small screens

```typescript
// Instead of: max-w-[1600px] mx-auto px-6
className="max-w-full lg:max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-6"
```

#### 1.3 Header Responsiveness
- Scale header typography on small screens
- Stack navigation menu on mobile (collapse into hamburger)
- Adjust icon and spacing

```typescript
<h1 className="text-lg sm:text-xl lg:text-2xl">Global Inequality Explorer</h1>
<TrendingUp className="w-4 sm:w-5 text-[#0a6167]" />
```

---

## 2. Filter Panel Responsiveness

### Current Issues
- `grid-cols-12` with `col-span-2` doesn't work on mobile
- Select boxes may be cramped
- Reset button placement unclear on small screens

### Implementation Strategy

#### 2.1 Implement Mobile-First Grid
```typescript
// Replace current grid-cols-12 with responsive layout
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4 mb-4"
```

- **Mobile (< 640px)**: Stack all filters vertically (1 column)
- **Tablet (640px - 1023px)**: 2-column layout
- **Desktop (≥ 1024px)**: 4-column layout (Region, Country, Other controls, Reset)

#### 2.2 Adjust Select Styling
- Increase padding on mobile for touch targets (min-height 44px)
- Scale font sizes: `text-xs sm:text-sm`
- Add touch-friendly spacing

```typescript
className="w-full bg-[#020b0c] border border-[#0a6167] rounded px-2 sm:px-3 py-2 sm:py-2.5 text-xs sm:text-sm h-10 sm:h-auto"
```

#### 2.3 Reset Button Positioning
- On mobile: Full width, spans all columns
- On tablet: Auto position within grid
- On desktop: Last grid item

```typescript
// Add conditional rendering or grid span adjustment
className="col-span-1 sm:col-span-1 lg:col-span-auto"
```

---

## 3. Chart Responsiveness (Critical)

### Current Issues
- Hard-coded dimensions prevent proper scaling
- Margin values don't adapt to screen width
- Right margin (200px) for legend is excessive on mobile
- No viewport/viewBox optimization
- Font sizes in axes not responsive
- Tooltip positioning doesn't account for mobile viewport

### Implementation Strategy

#### 3.1 Dynamic SVG Dimensions
```typescript
// In MainChart.tsx useEffect, calculate responsive dimensions:

const getChartDimensions = (containerWidth: number) => {
  const isSmall = containerWidth < 640;
  const isMedium = containerWidth < 1024;
  
  return {
    margins: {
      top: isSmall ? 15 : isMedium ? 20 : 20,
      right: isSmall ? 80 : isMedium ? 120 : 200,
      bottom: isSmall ? 40 : isMedium ? 50 : 60,
      left: isSmall ? 40 : isMedium ? 45 : 50,
    },
    chartHeight: isSmall ? 300 : isMedium ? 400 : 500,
    tickFontSize: isSmall ? '10px' : isMedium ? '11px' : '12px',
  };
};
```

#### 3.2 Implement Window Resize Listener
- Add `ResizeObserver` to monitor container width changes
- Recalculate chart on resize (debounced)
- Update both SVG and D3 scales

```typescript
useEffect(() => {
  const container = containerRef.current;
  if (!container) return;

  const observer = new ResizeObserver(() => {
    // Trigger chart redraw with useEffect dependency
    // Use debounce to avoid excessive redraws
  });

  observer.observe(container);
  return () => observer.disconnect();
}, []);
```

#### 3.3 Optimize SVG ViewBox
- Use viewBox instead of fixed width/height (enables scaling)
- Set `preserveAspectRatio="xMidYMid meet"`
- Remove fixed dimensions

```typescript
svgElement
  .attr("viewBox", `0 0 ${containerWidth} ${chartHeight}`)
  .attr("preserveAspectRatio", "xMidYMid meet")
  .style("max-width", "100%")
  .style("height", "auto");
```

#### 3.4 Legend Layout
**Mobile**: Stack vertically below chart
**Desktop**: Maintain current inline layout

```typescript
// Conditional legend layout based on container width
className={containerWidth < 768 
  ? "flex flex-col gap-3 px-2 mt-6 mb-2 text-xs" 
  : "flex gap-7 px-2 mt-10 mb-2 text-sm"
}
```

#### 3.5 Responsive Font Sizes in Chart
- Axis labels scale with screen size
- Reduce tick padding on small screens
- Adjust label positioning

```typescript
.style("font-size", `${chartDims.tickFontSize}`)
.tickPadding(isSmall ? 10 : 20)
```

#### 3.6 Tooltip Responsiveness
- Prevent tooltip from going off-screen
- Adjust position on mobile to avoid text cutoff
- Use smaller max-width on mobile

```typescript
// Calculate tooltip boundaries
const adjustTooltipPosition = (x: number, y: number, rect: DOMRect) => {
  const tooltipWidth = 160; // Approximate
  const tooltipHeight = 120; // Approximate
  
  let adjustedX = x + 20;
  let adjustedY = y - 100;
  
  // Prevent right overflow
  if (adjustedX + tooltipWidth > rect.width) {
    adjustedX = rect.width - tooltipWidth - 10;
  }
  
  // Prevent top overflow
  if (adjustedY < 10) {
    adjustedY = y + 20;
  }
  
  return { x: adjustedX, y: adjustedY };
};
```

---

## 4. Data Table Responsiveness (Future)

### Current Issues
- DataTable component is commented out
- When enabled, will need responsive table handling

### Implementation Strategy
- Horizontally scrollable wrapper on mobile
- Collapse columns on smaller screens
- Use card layout on mobile instead of table

---

## 5. Navigation Responsiveness

### Current Issues
- Not inspected yet, but likely needs mobile menu

### Implementation Strategy
- Implement hamburger menu for mobile (< 768px)
- Use Sheet/Drawer component from Radix UI
- Keep inline navigation on desktop

---

## 6. Typography & Spacing Scales

### Implement Responsive Typography
```typescript
// Header
<h1 className="text-base sm:text-lg md:text-xl lg:text-2xl">

// Subheadings
<p className="text-xs sm:text-sm md:text-base">

// Labels in filters
<label className="text-xs sm:text-xs md:text-sm">
```

### Spacing Scale
- Mobile: Use tighter spacing (gap-1, gap-2, gap-3)
- Tablet: Medium spacing (gap-3, gap-4)
- Desktop: Generous spacing (gap-4, gap-6, gap-7)

---

## 7. Tailwind Configuration Enhancement

### Create tailwind.config.ts
```typescript
export default {
  theme: {
    extend: {
      spacing: {
        'chart-sm': '300px',
        'chart-md': '400px',
        'chart-lg': '500px',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
};
```

---

## 8. Testing & Validation Strategy

### Screen Sizes to Test
- **Mobile**: 320px (iPhone SE), 375px (iPhone 12), 425px (larger phone)
- **Tablet**: 768px (iPad), 1024px (iPad Pro)
- **Desktop**: 1280px, 1440px, 1600px+

### Testing Tools
- Chrome DevTools responsive mode
- BrowserStack or physical devices
- Lighthouse for performance
- WebAIM for accessibility

### Testing Checklist
- [ ] Filter panel stacks properly on mobile
- [ ] Chart renders without horizontal scroll on all sizes
- [ ] Legend is readable and properly positioned
- [ ] Tooltip doesn't get cut off at screen edges
- [ ] Touch targets are minimum 44px on mobile
- [ ] No text overflow or truncation
- [ ] Performance is acceptable on lower-end devices
- [ ] Navigation is accessible on mobile

---

## 9. Implementation Phases

### Phase 1: Core Layout (Priority: HIGH)
1. Add tailwind.config.ts
2. Update App.tsx container and padding
3. Update FilterPanel grid layout
4. Add ResizeObserver to MainChart

### Phase 2: Chart Optimization (Priority: CRITICAL)
1. Implement dynamic margin calculation
2. Add responsive viewBox
3. Scale legend vertically on mobile
4. Fix tooltip positioning

### Phase 3: Polish & Details (Priority: MEDIUM)
1. Responsive typography
2. Touch target sizing
3. Spacing adjustments
4. Header responsiveness

### Phase 4: Testing & Refinement (Priority: HIGH)
1. Test on multiple devices
2. Performance optimization
3. Accessibility audit
4. Browser compatibility

---

## 10. Code Organization

### New/Modified Files
```
src/
├── app/
│   ├── App.tsx (modify)
│   ├── components/
│   │   ├── FilterPanel.tsx (modify)
│   │   ├── MainChart.tsx (modify - CRITICAL)
│   │   ├── Navigation.tsx (modify if needed)
│   │   ├── hooks/
│   │   │   └── useResponsive.ts (new)
│   │   └── utils/
│   │       └── chartUtils.ts (new - helper functions)
│   └── styles/
│       └── responsive.css (new - custom responsive utilities)
├── tailwind.config.ts (new)
└── vite.config.ts (modify if needed)
```

### Utility Hooks
**useResponsive.ts**: Custom hook for responsive values
```typescript
const useResponsive = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  // Calculate responsive values based on width
  return {
    isMobile: dimensions.width < 640,
    isTablet: dimensions.width >= 640 && dimensions.width < 1024,
    isDesktop: dimensions.width >= 1024,
    width: dimensions.width,
  };
};
```

---

## 11. Performance Considerations

### Optimization Strategies
1. Debounce resize events (200-300ms delay)
2. Use CSS media queries instead of JS when possible
3. Lazy load heavy D3 operations
4. Memoize responsive calculations
5. Minimize reflows during resize

```typescript
// Use debounce for resize listener
const handleResize = debounce(() => {
  // Recalculate chart
}, 250);
```

---

## Summary of Changes

| Component | Issue | Solution | Priority |
|-----------|-------|----------|----------|
| **App.tsx** | Fixed max-width, static padding | Responsive container, breakpoint-aware padding | HIGH |
| **FilterPanel** | Rigid grid layout | Mobile-first grid (1 → 2 → 4 columns) | HIGH |
| **MainChart** | Hard-coded dimensions, fixed height | Dynamic margins, viewBox, ResizeObserver | CRITICAL |
| **Chart Legend** | Inline layout on all sizes | Vertical stack on mobile | HIGH |
| **Tooltip** | Can overflow screen | Dynamic positioning with boundary detection | MEDIUM |
| **Typography** | Static sizes | Responsive text scales | MEDIUM |
| **Navigation** | Not inspected | Hamburger menu for mobile | MEDIUM |

---

## Success Criteria

✅ Chart is fully visible and usable on 320px screens without horizontal scroll
✅ Filter controls are accessible and properly spaced on all devices  
✅ Tooltip and interactive elements work correctly on mobile
✅ Legend is readable and appropriately positioned
✅ Page performs well on lower-end devices (Lighthouse score > 80)
✅ All breakpoint transitions are smooth and logical
✅ Touch targets meet minimum 44px requirement
