import React from 'react';
import { RotateCcw } from 'lucide-react';
import { getCountries, getRegions } from '@/data/inequalityData';

interface Filters {
  yAxis: string;
  incomeType: string;
  country: string;
  region: string;
  startYear: string;
  endYear: string;
}

interface FilterPanelProps {
  filters: Filters;
  setFilters: (filters: Filters) => void;
}

export function FilterPanel({ filters, setFilters }: FilterPanelProps) {
  const countries = getCountries();
  const regions = getRegions();
  const years = Array.from({ length: 45 }, (_, i) => (1980 + i).toString());

  const handleReset = () => {
    setFilters({
      yAxis: 'Income Share',
      incomeType: 'Factor Income',
      country: 'US',
      region: 'All',
      startYear: '1980',
      endYear: '2024',
    });
  };

  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-base">Income graph options</h2>
        <button 
          onClick={handleReset}
          className="text-red-500 text-sm flex items-center gap-1 hover:text-red-400"
        >
          <RotateCcw className="w-3 h-3" />
          Reset
        </button>
      </div>

      <div className="grid grid-cols-12 gap-4 mb-4">
        {/* Y-AXIS */}
        <div className="col-span-2">
          <label className="block text-xs text-gray-400 mb-2">Y-AXIS</label>
          <select
            value={filters.yAxis}
            onChange={(e) => setFilters({ ...filters, yAxis: e.target.value })}
            className="w-full bg-[#0d1f3a] border border-gray-600 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
          >
            <option>Income Share</option>
            <option>Real Income Growth</option>
            <option>Income Level</option>
          </select>
        </div>

        {/* INCOME TYPE */}
        <div className="col-span-2">
          <label className="block text-xs text-gray-400 mb-2">INCOME TYPE</label>
          <select
            value={filters.incomeType}
            onChange={(e) => setFilters({ ...filters, incomeType: e.target.value })}
            className="w-full bg-[#0d1f3a] border border-gray-600 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
          >
            <option>Factor Income</option>
            <option>Pre-tax Income</option>
            <option>Post-tax Income</option>
          </select>
        </div>

        {/* COUNTRY */}
        <div className="col-span-2">
          <label className="block text-xs text-gray-400 mb-2">COUNTRY</label>
          <select
            value={filters.country}
            onChange={(e) => setFilters({ ...filters, country: e.target.value })}
            className="w-full bg-[#0d1f3a] border border-gray-600 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
          >
            <option value="All">All Countries</option>
            {countries.map(country => (
              <option key={country.code} value={country.code}>{country.name}</option>
            ))}
          </select>
        </div>

        {/* REGION */}
        <div className="col-span-2">
          <label className="block text-xs text-gray-400 mb-2">REGION</label>
          <select
            value={filters.region}
            onChange={(e) => setFilters({ ...filters, region: e.target.value })}
            className="w-full bg-[#0d1f3a] border border-gray-600 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
          >
            <option value="All">All Regions</option>
            {regions.map(region => (
              <option key={region} value={region}>{region}</option>
            ))}
          </select>
        </div>

        {/* DATE RANGE */}
        <div className="col-span-4">
          <label className="block text-xs text-gray-400 mb-2">TIME RANGE</label>
          <div className="flex gap-2 items-center">
            <select
              value={filters.startYear}
              onChange={(e) => setFilters({ ...filters, startYear: e.target.value })}
              className="flex-1 bg-[#0d1f3a] border border-gray-600 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
            >
              {years.map(year => (
                <option key={year}>{year}</option>
              ))}
            </select>
            <div className="text-gray-400 text-sm">TO</div>
            <select
              value={filters.endYear}
              onChange={(e) => setFilters({ ...filters, endYear: e.target.value })}
              className="flex-1 bg-[#0d1f3a] border border-gray-600 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
            >
              {years.map(year => (
                <option key={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}