import React from 'react';

interface InvestmentFormProps {
  monthlyInvestment: number;
  years: number;
  onMonthlyInvestmentChange: (value: number) => void;
  onYearsChange: (value: number) => void;
}

export function InvestmentForm({
  monthlyInvestment,
  years,
  onMonthlyInvestmentChange,
  onYearsChange
}: InvestmentFormProps) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Monthly Investment (₹)
        </label>
        <input
          type="number"
          value={monthlyInvestment}
          onChange={(e) => onMonthlyInvestmentChange(Number(e.target.value))}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
          min="500"
          max="150000"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Investment Period (Years)
        </label>
        <input
          type="number"
          value={years}
          onChange={(e) => onYearsChange(Number(e.target.value))}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
          min="15"
          max="50"
        />
      </div>

      <div className="bg-indigo-50 rounded-xl p-4">
        <p className="text-sm text-indigo-700 font-medium">Current PPF Interest Rate</p>
        <p className="text-2xl font-bold text-indigo-900">7.1% p.a.</p>
      </div>
    </div>
  );
}