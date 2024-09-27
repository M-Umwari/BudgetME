import React, { useReducer, useState } from 'react';
import { ExpenseForm } from './ExpenseForm';
import { ExpenseList } from './ExpenseList';
import { ExpenseSummary } from './ExpenseSummary';
import { BudgetLimits } from './BudgetLimits';


const initialState = {
  expenses: [],
  budgetLimits: {}
};

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return { ...state, expenses: [...state.expenses, action.payload] };
    case 'UPDATE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.map(expense =>
          expense.id === action.payload.id ? action.payload : expense
        )
      };
    case 'SET_BUDGET_LIMIT':
      return {
        ...state,
        budgetLimits: { ...state.budgetLimits, [action.payload.category]: action.payload.limit }
      };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [filter, setFilter] = useState({ category: '', startDate: '', endDate: '' });
  const [currency, setCurrency] = useState('RWF'); 

  const addExpense = (expense) => {
    dispatch({ type: 'ADD_EXPENSE', payload: { ...expense, id: Date.now() } });
  };

  const updateExpense = (expense) => {
    dispatch({ type: 'UPDATE_EXPENSE', payload: expense });
  };

  const setBudgetLimit = (category, limit) => {
    dispatch({ type: 'SET_BUDGET_LIMIT', payload: { category, limit } });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">BUDGET-ME </h1>
      <div className="grid grid-cols-1 gap-6">
        <div className="col-span-1"> 
          <ExpenseSummary expenses={state.expenses} budgetLimits={state.budgetLimits} currency={currency} setCurrency={setCurrency}  />

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 
          <div>
            <ExpenseForm addExpense={addExpense} />
          </div>
          <div>
            <BudgetLimits setBudgetLimit={setBudgetLimit} budgetLimits={state.budgetLimits} />
          </div>
        </div>
      </div>
      <ExpenseList
        expenses={state.expenses}
        updateExpense={updateExpense}
        filter={filter}
        setFilter={setFilter}
        currency={currency}
      />
    </div>
  );
}
