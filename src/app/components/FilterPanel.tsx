import React from "react";
import { RotateCcw } from "lucide-react";
import { getCountries, getRegions } from "@/data/inequalityData";

interface Filters {
  yAxis: string;
  incomeType: string;
  country: string;
  region: string;
}

interface FilterPanelProps {
  filters: Filters;
  setFilters: (filters: Filters) => void;
}

export function FilterPanel({ filters, setFilters }: FilterPanelProps) {
  const countries = getCountries();
  const regions = getRegions();

  const handleReset = () => {
    setFilters({
      yAxis: "Income Share",
      incomeType: "Factor Income",
      country: "US",
      region: "All",
    });
  };

  return (
    <div className="mb-4 sm:mb-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4 mb-4">
        {/* REGION */}
        <div>
          <label className="block text-xs text-gray-400 mb-2 uppercase tracking-wide">
            Region
          </label>
          <select
            value={filters.region}
            onChange={(e) => setFilters({ ...filters, region: e.target.value })}
            className="w-full bg-[#020b0c] border border-[#0a6167] rounded px-2 sm:px-3 py-2 text-xs sm:text-sm text-[#e5e6ed] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 min-h-10"
          >
            <option value="All">All Regions</option>
            {regions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>

        {/* COUNTRY */}
        <div>
          <label className="block text-xs text-gray-400 mb-2 uppercase tracking-wide">
            Country
          </label>
          <select
            value={filters.country}
            onChange={(e) =>
              setFilters({ ...filters, country: e.target.value })
            }
            className="w-full bg-[#020b0c] border border-[#0a6167] rounded px-2 sm:px-3 py-2 text-xs sm:text-sm text-[#e5e6ed] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 min-h-10"
          >
            <option value="All">All Countries</option>
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        {/* RESET BUTTON */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 flex items-end">
          <button
            onClick={handleReset}
            className="w-full sm:w-auto px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-300 bg-[#020b0c] border border-[#0a6167] rounded hover:bg-[#0a6167]/10 transition-colors flex items-center justify-center sm:justify-start gap-1.5 min-h-10"
          >
            <RotateCcw className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Reset</span>
          </button>
        </div>
      </div>
    </div>
  );
}
