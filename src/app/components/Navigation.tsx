import React from 'react';
import { TrendingUp } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [activeTab, setActiveTab] = useState('income');

  const tabs = [
    { id: 'income', label: 'Income share' },
    { id: 'wealth', label: 'Gini coefficient' },
  ];

  return (
    <nav className="flex gap-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex items-center gap-2 px-3 py-2 text-sm transition-colors ${
            activeTab === tab.id
              ? 'text-white border-b-2 border-[#0a6167]'
              : 'text-gray-500 hover:text-gray-300'
          }`}
        >
          <TrendingUp className="w-4 h-4" />
          {tab.label}
        </button>
      ))}
    </nav>
  );
}
