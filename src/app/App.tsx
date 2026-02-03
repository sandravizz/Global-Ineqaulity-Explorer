import { useState } from 'react';
import { TrendingUp } from 'lucide-react';
import { FilterPanel } from '@/app/components/FilterPanel';
import { MainChart } from '@/app/components/MainChart';
import { DataTable } from '@/app/components/DataTable';
import { Navigation } from '@/app/components/Navigation';

export default function App() {
  const [selectedGroups, setSelectedGroups] = useState({
    top10: true,
    middle40: true,
    bottom50: true,
    total: false,
  });

  const [filters, setFilters] = useState({
    yAxis: 'Income Share',
    incomeType: 'Factor Income',
    country: 'US',
    region: 'All',
    startYear: '1980',
    endYear: '2024',
  });

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Header */}
      <header className="border-b border-gray-700 bg-[#0d1f3a]">
        <div className="max-w-[1600px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-blue-400" />
            <h1 className="text-lg">Realtime Inequality</h1>
          </div>
          <Navigation />
          <div className="text-sm text-gray-400">Methodology</div>
        </div>
      </header>

      <div className="max-w-[1600px] mx-auto px-6 py-6">
        {/* Instructions */}
        <div className="mb-6 text-sm text-blue-300 border-l-2 border-blue-500 pl-4 py-2">
          <p className="mb-1">
            You can adjust the graph with the options below: what the y-axis displays, the definition of income, the statistical unit, the data frequency, and the time range.
          </p>
          <p>
            You can also select groups using the box on the right. All dollar figures are annualized and adjusted for price inflation to March 2023 dollars.
          </p>
        </div>

        {/* Filter Panel */}
        <FilterPanel filters={filters} setFilters={setFilters} />

        {/* Main Content */}
        <div className="flex gap-6">
          {/* Chart */}
          <div className="flex-1">
            <MainChart 
              selectedGroups={selectedGroups} 
              setSelectedGroups={setSelectedGroups}
              filters={filters}
            />
          </div>

          {/* Data Table */}
          <DataTable 
            selectedGroups={selectedGroups}
            setSelectedGroups={setSelectedGroups}
          />
        </div>
      </div>
    </div>
  );
}