# Unused Code Analysis Report

## Executive Summary
This project has extensive **unused UI components** that were likely scaffolded from a UI library template but are not integrated into the application. The application uses standard HTML elements instead of these components.

---

## 1. UNUSED UI COMPONENTS (50+ Files)

### Location: `src/app/components/ui/`

All of the following UI components are **NEVER IMPORTED** anywhere in the application:

#### Core Components (Not Used)
- `accordion.tsx`
- `alert-dialog.tsx`
- `alert.tsx`
- `aspect-ratio.tsx`
- `avatar.tsx`
- `badge.tsx`
- `breadcrumb.tsx`
- `calendar.tsx`
- `card.tsx`
- `carousel.tsx`
- `checkbox.tsx`
- `collapsible.tsx`
- `command.tsx`
- `context-menu.tsx`
- `dialog.tsx`
- `drawer.tsx`
- `dropdown-menu.tsx`
- `hover-card.tsx`
- `input-otp.tsx`
- `input.tsx`
- `label.tsx`
- `menubar.tsx`
- `navigation-menu.tsx`
- `pagination.tsx`
- `popover.tsx`
- `progress.tsx`
- `radio-group.tsx`
- `resizable.tsx`
- `scroll-area.tsx`
- `sheet.tsx`
- `skeleton.tsx`
- `slider.tsx`
- `sonner.tsx`
- `switch.tsx`
- `table.tsx`
- `tabs.tsx`
- `textarea.tsx`
- `toggle-group.tsx`
- `toggle.tsx`
- `tooltip.tsx`

#### Utility Files (Mostly Used Internally)
- `button.tsx` - Only uses `cn` utility, never imported in app
- `form.tsx` - Only uses `Label` from `label.tsx`, never imported in app
- `select.tsx` - Never imported in app
- `sidebar.tsx` - Never imported in app
- `use-mobile.ts` - Never imported in app
- `utils.ts` - Provides `cn` utility (class-variance-authority wrapper)

**Impact:** ~45 component files (tens of thousands of lines) that add bloat to the bundle

---

## 2. POTENTIALLY UNUSED DEPENDENCIES

Based on `package.json`, these packages appear unused or minimally used:

### UI Library Dependencies (For unused components)
- `@radix-ui/*` - 26 packages installed but only `cn` utility used
- `class-variance-authority` - Used only in `cn` utility
- `cmdk` - Powering unused `command.tsx`
- `embla-carousel-react` - Powering unused `carousel.tsx`
- `input-otp` - Powering unused `input-otp.tsx`
- `react-day-picker` - Powering unused `calendar.tsx`
- `react-popper` - Powering unused `popover.tsx`
- `react-resizable-panels` - Powering unused `resizable.tsx`

### Potentially Unused Libraries
- `react-dnd` - Drag & drop (no imports found)
- `react-dnd-html5-backend` - Drag & drop backend (no imports found)
- `react-hook-form` - Form handling (no imports found)
- `react-responsive-masonry` - Masonry layout (no imports found)
- `react-slick` - Carousel slider (no imports found, separate from embla-carousel)
- `vaul` - Drawer component (no imports found)

### Animation Libraries
- `motion` - Motion animation (no imports found)
- `next-themes` - Theme switcher (no imports found)

---

## 3. UNUSED COMPONENTS IN MAIN APP - deleted 

### ImageWithFallback Component
**File:** `src/app/components/figma/ImageWithFallback.tsx`
- **Status:** UNUSED - Never imported or used anywhere
- **Purpose:** Fallback image component with error handling
- **Impact:** ~25 lines of dead code

---

## 4. STYLE FILES

### Potentially Unused CSS
**Files in `src/styles/`:**
- `index.css` - Main entry point (USED)
- `fonts.css` - Imported by index.css (USED)
- `tailwind.css` - Imported by index.css (USED)
- `theme.css` - **NOT IMPORTED** - Likely unused - deleted 

**Status:** `theme.css` appears to be orphaned and not loaded

---

## 5. ACTUAL PROJECT DEPENDENCIES (In Use)

### Core Libraries
- React 18.3.1
- React DOM 18.3.1
- D3 ^7.9.0 (for main chart visualization)

### UI & Styling
- Tailwind CSS 4.1.12 (entire styling system)
- TailwindCSS Vite plugin 4.1.12

### Icons
- `lucide-react` - Used for icons (TrendingUp, RotateCcw, Check, Download, Share2)

### Charts
- `recharts` 2.15.2 - NOT DIRECTLY USED (D3 is used instead)

### Build Tools
- Vite 6.3.5
- TypeScript ^5.9.3
- @vitejs/plugin-react 4.7.0
- PostCSS (via tailwindcss)

---

## 6. UNUSED IMPORTS IN CODEBASE

### MainChart.tsx
- Imports `Download`, `Share2` from lucide-react but uses them only in non-functional buttons
- These icons are functional but the buttons don't have click handlers

### Navigation.tsx
- Imports `TrendingUp` icon twice (React imports it, then IconBrowser also imports it)

---

## 7. UNUSED FUNCTIONALITY

### MainChart Component
```tsx
// Lines 448-455 - Non-functional buttons
<button className="flex items-center gap-2 px-4 py-2 bg-[#0d1f3a]...">
  <Share2 className="w-4 h-4" />
  Share  // Has no onClick handler
</button>
<button className="flex items-center gap-2 px-4 py-2 bg-blue-600...">
  <Download className="w-4 h-4" />
  Download data  // Has no onClick handler
</button>
```

### DataTable Component
```tsx
// Lines 118-121 - Non-functional expandable section
<button className="text-xs text-gray-400 hover:text-gray-300...">
  Mutually Exclusive Groups (Click to expand)
  // Has no onClick handler or functionality
</button>
```

---

## 8. BUNDLE IMPACT ESTIMATE

| Category | Count | Est. Size |
|----------|-------|-----------|
| Unused UI Components | 45+ files | ~200-300 KB (minified) |
| Unused Dependencies | 15+ packages | ~500-800 KB |
| Unused Component Exports | 100+ | ~50-100 KB |
| **Total Estimated Bloat** | | **~750 KB - 1.2 MB** |

---

## 9. RECOMMENDATIONS

### High Priority (Quick Wins)
1. **Delete entire `src/app/components/ui/` directory** - These components aren't being used
2. **Remove unused npm packages** - Radix UI, embla-carousel, cmdk, react-dnd, etc.
3. **Delete `src/app/components/figma/ImageWithFallback.tsx`** - Unused component 
4. **Check `src/styles/theme.css`** - Determine if it's needed or delete it
5. **Fix non-functional buttons** - Either implement Share/Download or remove them
6. **Implement DataTable expand functionality** or remove the button

### Medium Priority
1. **Verify recharts usage** - Currently installed but D3 is used instead
2. **Remove unused UI library dependencies** from package.json
3. **Clean up unused lucide-react imports** - Only keep icons that are actually visible

### Low Priority
1. **Review Navigation component** - The tab switching is UI-only (no actual page changes)
2. **Consider if theme.css has future purpose** - Otherwise remove it

---

## 10. FILES REQUIRING ACTION

### Delete Immediately
- [ ] `src/app/components/ui/` (entire directory)
- [ ] `src/app/components/figma/ImageWithFallback.tsx`
- [ ] `src/styles/theme.css` (if verified unused)

### Modify
- [ ] `package.json` - Remove 15+ unused dependencies
- [ ] `src/app/components/MainChart.tsx` - Fix or remove Share/Download buttons
- [ ] `src/app/components/DataTable.tsx` - Fix or remove expand button

### Update
- [ ] `src/styles/index.css` - Remove fonts.css if not using custom fonts
- [ ] Any other import statements referencing deleted files

---

## 11. TESTING CHECKLIST AFTER CLEANUP

- [ ] Run `npm install` to rebuild node_modules
- [ ] `npm run dev` - Verify dev server starts
- [ ] `npm run build` - Verify production build succeeds
- [ ] Check bundle size before/after cleanup
- [ ] Test all interactive features (filters, chart, table toggles)
- [ ] Visual check - ensure no broken styling
- [ ] Browser console - verify no import errors

---

## Conclusion

This project has significant technical debt from a scaffolded UI library template. The cleanup would save approximately **750 KB - 1.2 MB** from the bundle, improve dependency security (fewer packages to maintain), and make the codebase cleaner and easier to understand.
