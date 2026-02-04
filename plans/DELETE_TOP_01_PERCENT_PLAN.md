# Plan: Remove Top 0.1% Group from Legend, DataTable, and Tooltip

## Overview
Remove the "Top 0.1%" data group entirely from the application. This involves removing it from three main UI areas and the underlying state management.

---

## 1. State Management (App.tsx)

### Location
`/src/app/App.tsx` - Lines 9-14

### Current State
```tsx
const [selectedGroups, setSelectedGroups] = useState({
  top10: true,
  top01: true,    // ← REMOVE THIS
  bottom50: true,
  top_1: true,
});
```

### Changes Needed
- Remove `top01: true` from the `selectedGroups` state object
- Update the state to only track: `top10`, `bottom50`, `top_1`

---

## 2. DataTable Component (DataTable.tsx)

### Location
`/src/app/components/DataTable.tsx`

### Changes Needed

#### 2.1 Interface Definition (Lines 4-9)
Remove `top01: boolean;` from the `SelectedGroups` interface

#### 2.2 Table Data Array (Lines 17-54)
- Remove the entire object for "Top 0.1%" (Lines 27-35):
```tsx
{
   id: 'top01',
   label: 'Top 0.1%',
   growth: '-14.3%',
   gain: '-$4.2k',
   color: 'bg-blue-500',
   selected: selectedGroups.top01,
   interactive: true,
},
```

#### 2.3 Handle Toggle Function (Lines 56-68)
- Remove the condition handling `top01` (Lines 61-62):
```tsx
else if (id === 'top01') {
  setSelectedGroups({ ...selectedGroups, top01: !selectedGroups.top01 });
}
```

---

## 3. MainChart Component (MainChart.tsx)

### Location
`/src/app/components/MainChart.tsx`

### Changes Needed

#### 3.1 Interface Definition (Lines 5-10)
Remove `top01: boolean;` from the `SelectedGroups` interface

#### 3.2 Data Aggregation (Lines 54, 76, 84, 92)
Remove all references to `top_01` in the aggregation logic:
- Line 54: `existing.top_01 = (existing.top_01 + row.top_01) / 2;` → REMOVE
- Line 76: `top_01: d.top_01 * 100,` → REMOVE
- Line 84: `top_01: d.top_01 * 100,` → REMOVE
- Line 92: `top_01: d.top_01 * 100,` → REMOVE

#### 3.3 Line Generator (Lines 145-149)
Remove the entire `lineTop01` definition:
```tsx
const lineTop01 = d3
   .line<DataRow>()
   .x((d) => x(d.year))
   .y((d) => y(d.top_01))
   .curve(d3.curveMonotoneX);
```

#### 3.4 Draw Lines Section (Lines 184-192)
Remove the block that draws the Top 0.1% line:
```tsx
if (selectedGroups.top01) {
   svg
     .append("path")
     .datum(transformedData)
     .attr("fill", "none")
     .attr("stroke", "#8af8cc")
     .attr("stroke-width", 2.5)
     .attr("d", lineTop01);
 }
```

#### 3.5 Focus Circles (Lines 248-255)
Remove the circle for Top 0.1%:
```tsx
if (selectedGroups.top01) {
   focusCircles
     .append("circle")
     .attr("cx", x(d.year))
     .attr("cy", y(d.top_01))
     .attr("r", 4.5)
     .attr("fill", "#8af8cc");
 }
```

#### 3.6 Tooltip Data (Lines 274-300)
Remove the "Top 0.1%" entry from the tooltip values array (Lines 287-296):
```tsx
{
  group: "Top 0.1%",
  value: d.top_01.toFixed(1) + "%",
  color: "#8af8cc",
},
```

#### 3.7 Legend Buttons (Lines 396-409)
Remove the entire button for "Top 0.1%":
```tsx
<button
  onClick={() =>
    setSelectedGroups({
      ...selectedGroups,
      top01: !selectedGroups.top01,
    })
  }
  className="flex items-center gap-2 hover:opacity-80"
>
  <span
    className={`w-3 h-3 rounded-full ${selectedGroups.top01 ? "bg-[#8af8cc]" : "bg-gray-600"}`}
  ></span>
  Top 0.1%
</button>
```

---

## 4. Data Structure (inequalityData.ts) - Optional

### Note
If you want to keep the CSV data with the `top_01` field for potential future use or backward compatibility:
- **No changes needed** - the field can remain unused
- The application will simply not display or reference it

### Alternative: Clean Up Data
If you want to completely remove the field:
- Remove the `top_01: number;` property from the `DataRow` interface
- Ensure the CSV file no longer contains the column
- Remove it from fallback data

---

## 5. Testing Checklist

After making changes, verify:

- [ ] Application loads without errors
- [ ] Legend displays only: Bottom 50%, Top 10%, Top 1%
- [ ] Chart displays only 3 lines (no Top 0.1% line)
- [ ] Toggling legend items works correctly for remaining groups
- [ ] Tooltip shows only Bottom 50%, Top 10%, Top 1% when hovering over chart
- [ ] DataTable (if uncommented) displays only the 3 remaining groups
- [ ] No console errors related to missing `top01` property

---

## Summary of Changes

| File | Type of Change | Count |
|------|-----------------|-------|
| App.tsx | Remove state property | 1 |
| DataTable.tsx | Remove interface property, table row, toggle handler | 3 |
| MainChart.tsx | Remove interface property, data aggregation (4 lines), line generator, draw line block, circle block, tooltip entry, legend button | 10+ |
| inequalityData.ts | Optional - keep or remove field | Variable |

**Total Files to Modify:** 3 (mandatory) / 4 (if cleaning data)
