import { useState } from "react";
import { TrendingUp } from "lucide-react";
import { FilterPanel } from "@/app/components/FilterPanel";
import { MainChart } from "@/app/components/MainChart";
import { DataTable } from "@/app/components/DataTable";
import { Navigation } from "@/app/components/Navigation";

export default function App() {
  const [selectedGroups, setSelectedGroups] = useState({
    top10: true,
    middle40: true,
    bottom50: true,
    total: false,
  });

  const [filters, setFilters] = useState({
    yAxis: "Income Share",
    incomeType: "Factor Income",
    country: "US",
    region: "All",
  });

  return (
    <div className="min-h-screen bg-[#020b0c] text-white">
      {/* Header */}
      <header className="border-b border-gray-700 bg-[#020b0c]">
        <div className="max-w-[1600px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#4c8ffe]" />
            <h1 className="text-xl">hiGlobal Inequality Explorer</h1>
          </div>
          <Navigation />
        </div>
      </header>

      <div className="max-w-[1600px] mx-auto px-6 py-6">
        {/* Instructions */}
        <div className="mb-6 text-sm text-gray-500 py-2">
          <p className="mb-1">
            You can adjust the graph with the options below: what the y-axis
            displays, the definition of income, the statistical unit, and the
            data frequency.
          </p>
          <p>
            You can also select groups using the box on the right. All dollar
            figures are annualized and adjusted for price inflation to March
            2023 dollars.
          </p>
        </div>
        <FilterPanel filters={filters} setFilters={setFilters} />
        <div className="flex">
          <div className="flex-1">
            <MainChart
              selectedGroups={selectedGroups}
              setSelectedGroups={setSelectedGroups}
              filters={filters}
            />
            {/* <DataTable
              selectedGroups={selectedGroups}
              setSelectedGroups={setSelectedGroups}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
