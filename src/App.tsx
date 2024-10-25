import React, { useState, useCallback } from 'react';
import { Calculator } from 'lucide-react';
import { InvestmentForm } from './components/InvestmentForm';
import { InvestmentSummary } from './components/InvestmentSummary';

function App() {
  const [years, setYears] = useState<number>(15);
  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(12500);

  const calculatePPF = useCallback(() => {
    const rate = 7.1; // Current PPF interest rate
    const yearlyInvestment = monthlyInvestment * 12;
    let totalInvestment = 0;
    let maturityAmount = 0;

    for (let i = 1; i <= years; i++) {
      totalInvestment += yearlyInvestment;
      maturityAmount = (maturityAmount + yearlyInvestment) * (1 + rate / 100);
    }

    return {
      totalInvestment: Math.round(totalInvestment),
      maturityAmount: Math.round(maturityAmount),
      gainAmount: Math.round(maturityAmount - totalInvestment)
    };
  }, [years, monthlyInvestment]);

  const { totalInvestment, maturityAmount, gainAmount } = calculatePPF();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-8">
              <Calculator className="w-8 h-8 text-indigo-600" />
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">PPF Calculator</h1>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <InvestmentForm
                monthlyInvestment={monthlyInvestment}
                years={years}
                onMonthlyInvestmentChange={setMonthlyInvestment}
                onYearsChange={setYears}
              />
              <InvestmentSummary
                totalInvestment={totalInvestment}
                maturityAmount={maturityAmount}
                gainAmount={gainAmount}
              />
            </div>
          </div>

          <div className="mt-8 bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">About PPF Investment</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                • PPF has a lock-in period of 15 years with partial withdrawal allowed from the 7th year.</li>
              <li className="flex items-start gap-2">
                • The interest rate is reviewed quarterly by the government.</li>
              <li className="flex items-start gap-2">
                • Maximum investment allowed is ₹1,50,000 per financial year.</li>
              <li className="flex items-start gap-2">
                • The interest earned and maturity amount are completely tax-free under Section 80C.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;