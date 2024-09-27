import React from 'react';

export function ExpenseList({ expenses, updateExpense, filter, setFilter }) {
  const filteredExpenses = expenses.filter(expense => {
    return (
      (!filter.category || expense.category === filter.category) &&
      (!filter.startDate || expense.date >= filter.startDate) &&
      (!filter.endDate || expense.date <= filter.endDate)
    );
  });

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Expense List</h2>
      <div className="mb-4 flex flex-grow gap-5">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Filter by category"
          value={filter.category}
          onChange={(e) => setFilter({ ...filter, category: e.target.value })}
        />
        <div className="flex flex-col">
          <label htmlFor="start-date" className="mb-1">Start Date</label>
          <input
            id="start-date"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="date"
            value={filter.startDate}
            onChange={(e) => setFilter({ ...filter, startDate: e.target.value })}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="end-date" className="mb-1">End Date</label>
          <input
            id="end-date"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="date"
            value={filter.endDate}
            onChange={(e) => setFilter({ ...filter, endDate: e.target.value })}
          />
        </div>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Amount</th>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Category</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredExpenses.map(expense => (
            <tr key={expense.id}>
              <td className="py-2 px-4 border-b">${expense.amount}</td>
              <td className="py-2 px-4 border-b">{expense.date}</td>
              <td className="py-2 px-4 border-b">{expense.category}</td>
              <td className="py-2 px-4 border-b">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => {
                    const updatedAmount = prompt("Enter new amount:", expense.amount);
                    if (updatedAmount) {
                      updateExpense({ ...expense, amount: updatedAmount });
                    }
                  }}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
