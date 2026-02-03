import React from 'react';
import { Check } from 'lucide-react';

interface SelectedGroups {
  top10: boolean;
  middle40: boolean;
  bottom50: boolean;
  total: boolean;
}

interface DataTableProps {
  selectedGroups: SelectedGroups;
  setSelectedGroups: (groups: SelectedGroups) => void;
}

export function DataTable({ selectedGroups, setSelectedGroups }: DataTableProps) {
  const tableData = [
    {
      id: 'top10',
      label: 'Top 10%',
      growth: '60.6%',
      gain: '$78k',
      color: 'bg-red-500',
      selected: selectedGroups.top10,
      interactive: true,
    },
    {
      id: 'middle40',
      label: 'Middle 40%',
      growth: '-14.3%',
      gain: '-$4.2k',
      color: 'bg-blue-500',
      selected: selectedGroups.middle40,
      interactive: true,
    },
    {
      id: 'bottom50',
      label: 'Bottom 50%',
      growth: '-47.8%',
      gain: '-$5.5k',
      color: 'bg-lime-500',
      selected: selectedGroups.bottom50,
      interactive: true,
    },
    {
      id: 'total',
      label: 'Top 1%',
      growth: '175.0%',
      gain: '$1.4M',
      color: 'bg-white',
      selected: selectedGroups.total,
      interactive: true,
    },
  ];

  const handleToggle = (id: string, interactive: boolean) => {
    if (!interactive) return;
    
    if (id === 'top10') {
      setSelectedGroups({ ...selectedGroups, top10: !selectedGroups.top10 });
    } else if (id === 'middle40') {
      setSelectedGroups({ ...selectedGroups, middle40: !selectedGroups.middle40 });
    } else if (id === 'bottom50') {
      setSelectedGroups({ ...selectedGroups, bottom50: !selectedGroups.bottom50 });
    } else if (id === 'total') {
      setSelectedGroups({ ...selectedGroups, total: !selectedGroups.total });
    }
  };

  return (
    <div className="w-80 bg-[#0d1f3a] rounded-lg p-4 border border-gray-700">
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
          <h3 className="text-sm">Factor Income growth per adult</h3>
        </div>
        <p className="text-xs text-gray-400">From Jan 1980 to Mar 2024</p>
      </div>

      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-600">
            <th className="text-left py-2 text-xs text-gray-400">Group</th>
            <th className="text-right py-2 text-xs text-gray-400">Growth (%)</th>
            <th className="text-right py-2 text-xs text-gray-400">Gain ($)</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr
              key={row.id}
              onClick={() => handleToggle(row.id, row.interactive)}
              className={`border-b border-gray-700 ${
                row.interactive ? 'cursor-pointer hover:bg-[#1a2f4a]' : 'opacity-60 cursor-not-allowed'
              } ${
                row.selected ? 'bg-[#1a2f4a]' : ''
              }`}
            >
              <td className="py-2.5">
                <div className="flex items-center gap-2">
                  <div className={`w-4 h-4 border rounded flex items-center justify-center ${
                    row.interactive ? 'border-gray-500' : 'border-gray-700 bg-gray-800'
                  }`}>
                    {row.selected && <Check className="w-3 h-3 text-blue-400" />}
                  </div>
                  <span className={`w-2 h-2 ${row.color} rounded-full`}></span>
                  <span className="text-sm">{row.label}</span>
                </div>
              </td>
              <td className="text-right py-2.5">{row.growth}</td>
              <td className="text-right py-2.5">{row.gain}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4">
        <button className="text-xs text-gray-400 hover:text-gray-300 flex items-center gap-1">
          Mutually Exclusive Groups (Click to expand)
          <span className="text-blue-400">+</span>
        </button>
      </div>
    </div>
  );
}