import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Balance } from './Balance';


ChartJS.register(ArcElement, Tooltip, Legend);

export function ExpenseSummary({ expenses, budgetLimits }) {
  const categoryTotals = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + parseFloat(expense.amount);
    return acc;
  }, {});

  const data = {
    labels: Object.keys(categoryTotals),
    datasets: [
      {
        data: Object.values(categoryTotals),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40'
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40'
        ]
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Expense Summary</h2>
      <div style={{ height: '300px' }}>
        <Pie data={data} options={options} />
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold mb-2">Budget Alerts</h3>
        {Object.entries(categoryTotals).map(([category, total]) => {
          const limit = budgetLimits[category];
          if (limit && total > limit * 0.8) {
            return (
              <div key={category} className="text-red-500">
                Warning: {category} expenses (${total}) are nearing the budget limit (${limit})
              </div>
            );
          }
          return null;
        })}
      </div>
      <Balance expenses={expenses} budgetLimits={budgetLimits} />
    </div>
  );
}