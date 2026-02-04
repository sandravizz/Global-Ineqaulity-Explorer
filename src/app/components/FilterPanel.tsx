import React from 'react';
import { RotateCcw } from 'lucide-react';
import { getCountries, getRegions } from '@/data/inequalityData';

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
      yAxis: 'Income Share',
      incomeType: 'Factor Income',
      country: 'US',
      region: 'All',
    });
  };

  return (
    <div className="mb-6">
      <div className="grid grid-cols-12 gap-4 mb-4">


  

        {/* COUNTRY */}
        <div className="col-span-2">
          <label className="block text-xs text-gray-400 mb-2">COUNTRY</label>
          <select
            value={filters.country}
            onChange={(e) => setFilters({ ...filters, country: e.target.value })}
            className="w-full bg-[#020b0c] border border-[#0a6167] rounded px-3 py-2 text-sm text-[#e5e6ed] focus:outline-none focus:border-blue-500"
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
            className="w-full bg-[#020b0c] border border-[#0a6167] rounded px-3 py-2 text-sm text-[#e5e6ed] focus:outline-none focus:border-blue-500"
          >
            <option value="All">All Regions</option>
            {regions.map(region => (
              <option key={region} value={region}>{region}</option>
            ))}
          </select>
        </div>
            <button 
          onClick={handleReset}
          className="text-gray-300 text-sm flex items-center gap-1 hover:text-gray-300"
        >
          <RotateCcw className="w-3 h-3" />
          Reset
        </button>
      </div>
    </div>
  );
}