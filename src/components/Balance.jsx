import React, { useState, useMemo } from 'react';

export function Balance({ expenses, currency, setCurrency }) {
  const [initialBalance, setInitialBalance] = useState(0);

  // Ensure expense.amount is converted to a number before adding
  const totalExpenses = useMemo(() => 
    expenses.reduce((total, expense) => total + Number(expense.amount), 0), 
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
      <div className='flex flex-row flex-wrap gap-1'>
        <input
          id="initial-balance"
          type="number"
          placeholder={initialBalance}
          onChange={(e) => setInitialBalance(Number(e.target.value))}
          style={{
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            backgroundColor: '#d69c66',
            fontSize: '1rem',
            marginBottom: '16px',
            
          }}
        />
        
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          style={{
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            backgroundColor: '#f5f5f5',
            fontSize: '1rem',
            width: '120px', 
            marginBottom: '16px',
          }}
        >
          <option value="RWF">RWF (rwf)</option>
          <option value="$">USD ($)</option>
          <option value="€">EUR (€)</option>
          <option value="£">GBP (£)</option>
          <option value="¥">JPY (¥)</option>
          <option value="₹">INR (₹)</option>
          <option value="C$">CAD (C$)</option>
          <option value="A$">AUD (A$)</option>
          <option value="₣">CHF (₣)</option>
        </select>
      </div>
      <h2>Total Balance: {currency}{totalBalance.toFixed(2)}</h2>
    </div>
  );
}
