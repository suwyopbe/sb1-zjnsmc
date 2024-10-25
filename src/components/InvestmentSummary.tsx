import React from 'react';
import { IndianRupee, TrendingUp, Calendar, PiggyBank } from 'lucide-react';
import { InvestmentChart } from './InvestmentChart';

interface InvestmentSummaryProps {
  totalInvestment: number;
  maturityAmount: number;
  gainAmount: number;
}

export function InvestmentSummary({ totalInvestment, maturityAmount, gainAmount }: InvestmentSummaryProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-xl p-6 text-white space-y-6">
        <div className="flex items-center gap-3 pb-4 border-b border-indigo-400">
          <PiggyBank className="w-6 h-6" />
          <h2 className="text-xl font-semibold">Investment Summary</h2>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-indigo-200 flex items-center gap-2">
              <IndianRupee className="w-4 h-4" />
              Total Investment
            </p>
            <p className="text-2xl font-bold">{formatCurrency(totalInvestment)}</p>
          </div>

          <div>
            <p className="text-indigo-200 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Estimated Returns
            </p>
            <p className="text-2xl font-bold">{formatCurrency(gainAmount)}</p>
          </div>

          <div>
            <p className="text-indigo-200 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Maturity Amount
            </p>
            <p className="text-3xl font-bold">{formatCurrency(maturityAmount)}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Investment Distribution</h3>
        <InvestmentChart totalInvestment={totalInvestment} gainAmount={gainAmount} />
      </div>
    </div>
  );
}