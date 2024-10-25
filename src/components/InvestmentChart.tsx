import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface InvestmentChartProps {
  totalInvestment: number;
  gainAmount: number;
}

const COLORS = ['#4f46e5', '#818cf8'];

export function InvestmentChart({ totalInvestment, gainAmount }: InvestmentChartProps) {
  const data = [
    { name: 'Total Investment', value: totalInvestment },
    { name: 'Returns', value: gainAmount },
  ];

  const formatTooltipValue = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 shadow-lg rounded-lg border border-gray-100">
          <p className="text-sm font-medium text-gray-900">{payload[0].name}</p>
          <p className="text-lg font-bold text-indigo-600">
            {formatTooltipValue(payload[0].value)}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
      <div className="flex justify-center gap-6 mt-4">
        {data.map((entry, index) => (
          <div key={entry.name} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: COLORS[index] }}
            />
            <span className="text-sm text-gray-600">{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}