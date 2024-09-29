import React, { useState } from 'react';

export function BudgetLimits({ setBudgetLimit, budgetLimits }) {
  const [category, setCategory] = useState('');
  const [limit, setLimit] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (category && limit) {
      setBudgetLimit(category, parseFloat(limit));
      setCategory('');
      setLimit('');
    }
  };

  return (
    <div className="sub-container rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Set Budget Limits</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
            Category
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="category"
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="limit">
            Limit
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="limit"
            type="number"
            placeholder="Limit"
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className=" font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Set Limit
          </button>
        </div>
      </form>
      <div className="mt-4">
        <h3 className="text-xl font-bold mb-2">Current Budget Limits</h3>
        <ul>
          {Object.entries(budgetLimits).map(([category, limit]) => (
            <li key={category}>
              {category}: ${limit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}