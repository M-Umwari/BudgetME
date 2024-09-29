import React, { useState } from 'react';

export function ExpenseForm({ addExpense }) {
  const [expense, setExpense] = useState({ amount: '', date: '', category: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (expense.amount && expense.date && expense.category) {
      addExpense(expense);
      setExpense({ amount: '', date: '', category: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="sub-container rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">Add Expense</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
          Amount
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="amount"
          type="number"
          placeholder="Amount"
          value={expense.amount}
          onChange={(e) => setExpense({ ...expense, amount: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
          Date
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="date"
          type="date"
          value={expense.date}
          onChange={(e) => setExpense({ ...expense, date: e.target.value })}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
          Category
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="category"
          type="text"
          placeholder="Category"
          value={expense.category}
          onChange={(e) => setExpense({ ...expense, category: e.target.value })}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add Expense
        </button>
      </div>
    </form>
  );
}