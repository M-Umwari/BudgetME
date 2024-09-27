import React, { useState, useMemo } from 'react';

export function Balance({ expenses, budgetLimits }) {
  const [initialBalance, setInitialBalance] = useState(0);

  const totalExpenses = useMemo(() => 
    expenses.reduce((total, expense) => total + expense.amount, 0), 
    [expenses]
  );

  const totalBalance = useMemo(() => 
    initialBalance - totalExpenses, 
    [initialBalance, totalExpenses]
  );

  return (
    <div>
      <label htmlFor="initial-balance" style={{ display: 'block', marginBottom: '8px' }}>
        Initial Balance
      </label>
      <input
        id="initial-balance"
        type="number"
        value={initialBalance}
        onChange={(e) => setInitialBalance(Number(e.target.value))}
        style={{
          width: '100%',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          backgroundColor: '#f5f5f5',
          fontSize: '1rem',
          marginBottom: '16px',
        }}
      />
      <h2>Total Balance: ${totalBalance.toFixed(2)}</h2>

    </div>
  );
}
