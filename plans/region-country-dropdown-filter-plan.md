# Plan: Connect Region & Country Dropdowns with Cascading Filters

## Overview
Connect the region and country dropdown menus so that selecting a region filters the countries dropdown to show only countries belonging to that region. When "All Regions" is selected, all countries display. When a region is selected, only its countries show.

---

## Current State Analysis

### Data Structure
- **inequalityData.ts**: Contains the raw data with fields:
  - `country` (code, e.g., "US")
  - `shortname` (full name, e.g., "United States")
  - `region2` (region, e.g., "North America", "Europe")
  
- **Functions**:
  - `getCountries()`: Returns all countries (unfiltered)
  - `getRegions()`: Returns all regions (unfiltered)
  - `filterData()`: Filters by country OR region (not cascading)

### Current UI Behavior
- Region dropdown: Shows all regions
- Country dropdown: Shows all countries (independent of region selection)
- Reset button: Sets region to "All", country to "US"

---

## Implementation Plan

### Phase 1: Add Data Helper Function
**File**: `src/data/inequalityData.ts`

Create a new function to get countries filtered by region:

```typescript
// Get countries for a specific region
export const getCountriesByRegion = (region: string): { code: string; name: string }[] => {
  if (region === 'All') {
    return getCountries();
  }
  
  const uniqueCountries = new Map<string, string>();
  inequalityData
    .filter(row => row.region2 === region)
    .forEach(row => {
      uniqueCountries.set(row.country, row.shortname);
    });
  
  const countryList = Array.from(uniqueCountries.entries())
    .map(([code, name]) => ({ code, name }))
    .sort((a, b) => a.name.localeCompare(b.name));
  
  return countryList;
};
```

**Purpose**: Returns countries for a selected region, or all countries if region is "All"

---

### Phase 2: Update FilterPanel Component
**File**: `src/app/components/FilterPanel.tsx`

Modifications:
1. Import the new `getCountriesByRegion` function
2. Update state logic to dynamically compute available countries based on selected region
3. Handle edge cases when switching regions (validate current country exists in new region)
4. Reset country selection when region changes if the current country is not in the new region

```typescript
// Inside FilterPanel component
const handleRegionChange = (newRegion: string) => {
  const countriesInRegion = getCountriesByRegion(newRegion);
  const countryExists = countriesInRegion.some(c => c.code === filters.country);
  
  // If current country not in new region, reset to first country or "All"
  const newCountry = countryExists ? filters.country : (countriesInRegion.length > 0 ? countriesInRegion[0].code : "All");
  
  setFilters({ ...filters, region: newRegion, country: newCountry });
};

// Render section for countries dropdown
const filteredCountries = getCountriesByRegion(filters.region);
```

---

### Phase 3: Update Reset Behavior
**File**: `src/app/components/FilterPanel.tsx`

Modify the `handleReset` function to:
- Set region to "All"
- Set country to "All" (or "US" if it should be preserved)
- Optionally reset other filters as well

```typescript
const handleReset = () => {
  setFilters({
    yAxis: "Income Share",
    incomeType: "Factor Income",
    country: "All",  // Changed to "All"
    region: "All",
  });
};
```

---

## Detailed Implementation Steps

### Step 1: Update `inequalityData.ts`
- Add `getCountriesByRegion()` function
- Ensure it handles the "All" case properly
- Add appropriate console logging for debugging

### Step 2: Update `FilterPanel.tsx`
- Import `getCountriesByRegion`
- Add handler for region change: `handleRegionChange()`
- Compute `filteredCountries` based on selected region
- Update region select's `onChange` to use new handler
- Update country select's options map to use `filteredCountries`
- Update reset button behavior

### Step 3: Test the Flow
1. Select a region → countries dropdown updates to show only that region's countries
2. Select a region where current country doesn't exist → country auto-selects to first available
3. Click "Reset" → both dropdowns reset to "All" or default values
4. Select "All Regions" → countries dropdown shows all countries again

---

## Edge Cases to Handle

1. **Country doesn't exist in new region**
   - Auto-select the first country in the region or default to "All"
   - Don't leave the form in an invalid state

2. **Empty region (no countries)**
   - Show a message or keep "All Countries" option
   - Unlikely with real data, but good defensive programming

3. **Reset from filtered state**
   - Should return to initial state (All regions, All/US countries)

4. **Programmatic filter changes**
   - If filters are set externally (e.g., from URL params), ensure country is valid for region

---

## Expected User Flows

### Flow 1: Select Region → See Filtered Countries
```
User clicks Region dropdown → Selects "Europe"
├─ Region becomes "Europe"
├─ Country dropdown updates to show: Germany, France, UK, etc.
└─ User selects a country from the filtered list
```

### Flow 2: Switch Regions
```
User has selected "Europe" + "Germany"
├─ User changes region to "Asia"
├─ Country dropdown updates to show: China, Japan, India, etc.
├─ "Germany" is no longer valid → Auto-select "China" (first in list)
└─ Chart updates with new data
```

### Flow 3: Reset Everything
```
User clicks Reset button
├─ Region resets to "All"
├─ Country resets to "All" 
└─ Chart shows global data
```

---

## Testing Checklist

- [ ] Region dropdown populated correctly
- [ ] Country dropdown updates when region changes
- [ ] Invalid country replaced when region changes
- [ ] "All Regions" shows all countries
- [ ] Reset button clears both filters
- [ ] Chart updates correctly with cascading filters
- [ ] No console errors during selection changes
- [ ] Responsive design maintained
- [ ] Keyboard navigation works
- [ ] Mobile view works correctly

---

## Files Modified
1. `src/data/inequalityData.ts` - Add new helper function
2. `src/app/components/FilterPanel.tsx` - Update logic and rendering

## Files NOT Modified
- `src/app/App.tsx` - No changes needed (props remain same)
- `src/app/components/MainChart.tsx` - No changes needed (existing filter logic works)
