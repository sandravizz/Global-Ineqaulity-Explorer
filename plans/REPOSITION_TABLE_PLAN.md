# Plan: Reposition Data Table to Top-Right Corner

## Overview
Move the DataTable component from below the MainChart to the top-right corner of the page, aligned with the FilterPanel (same y-position) but positioned on the right side.

## Current Layout
- **FilterPanel**: Top of page, full width grid layout (mb-4 sm:mb-6)
- **MainChart**: Below FilterPanel, full width
- **DataTable**: Below MainChart, full width

## Target Layout
```
[FilterPanel spans full width]     [DataTable positioned right]
[MainChart spans available space]
```

## Implementation Steps

### Step 1: Restructure App.tsx Layout
- Change the main content grid from vertical (chart below filters, table below chart) to a two-section layout:
  - **Section 1**: Full width filters at top
  - **Section 2**: Two-column grid containing chart (left) and table (right)

```html
<main>
  <FilterPanel />     <!-- Full width -->
  <div class="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-4">
    <div>
      <MainChart />   <!-- Left column, responsive full width on mobile -->
    </div>
    <div>
      <DataTable />   <!-- Right column, fixed/flex width -->
    </div>
  </div>
</main>
```

### Step 2: Adjust Responsive Behavior
- **Mobile (< md)**: Stack vertically (chart full width, table below)
- **Tablet/Desktop (md+)**: Two-column layout (chart takes flex space, table on right)
- DataTable width: Keep current w-80 or adjust to w-72 for tighter spacing

### Step 3: Adjust Spacing
- Remove `mb-4 sm:mb-6` from FilterPanel (will use grid gap instead)
- Add appropriate gap between chart and table in the grid layout
- Ensure padding consistency

### Step 4: Update DataTable (if needed)
- May need to make DataTable height scrollable if content exceeds viewport
- Consider `max-h-[calc(100vh-...)]` for overflow handling
- Ensure responsive width behavior

## CSS Changes Required
- Update App.tsx: Modify main > div structure from flex-1 to grid layout
- Grid template: `grid-cols-1 lg:grid-cols-[1fr_auto]` or fixed width on right
- Gap between columns: `gap-4 sm:gap-6`
- DataTable container: Ensure width constraint (w-72 to w-80)

## Mobile Fallback
On smaller screens, DataTable reverts to full-width below chart using Tailwind's responsive classes

## Benefits
- ✓ Better use of horizontal space on desktop
- ✓ Filters at top remain prominent and accessible
- ✓ Chart and table visible simultaneously on wide screens
- ✓ Maintains mobile-first responsive design
- ✓ Improves data visibility and comparison workflows
