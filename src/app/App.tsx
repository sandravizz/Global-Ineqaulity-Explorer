import { useState } from "react";
import { TrendingUp } from "lucide-react";
import { FilterPanel } from "@/app/components/FilterPanel";
import { MainChart } from "@/app/components/MainChart";
import { DataTable } from "@/app/components/DataTable";
import { Navigation } from "@/app/components/Navigation";

export default function App() {
  const [selectedGroups, setSelectedGroups] = useState({
    top10: true,
    bottom50: true,
    top_1: true,
  });

  const [filters, setFilters] = useState({
    yAxis: "Income Share",
    incomeType: "Factor Income",
    country: "US",
    region: "All",
  });

  return (
    <div className="min-h-screen bg-[#020b0c] text-[#e5e6ed]">
      <header className="bg-[#020b0c] border-b border-[#0a6167]/20">
        <div className="max-w-container mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 sm:w-5 text-[#0a6167]" />
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
              Global Inequality Explorer
            </h1>
          </div>
          <Navigation />
        </div>
      </header>
      <main className="max-w-container mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6">
        <div className="mb-4 sm:mb-6 text-xs sm:text-sm text-gray-500 py-2">
          <p>
            You can adjust the graph with the options below: what the y-axis
            displays, the definition of income, the statistical unit, and the
            data frequency.
          </p>
        </div>
        <FilterPanel filters={filters} setFilters={setFilters} />
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
      </main>
    </div>
  );
}
