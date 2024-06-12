import React, { useContext, useEffect } from 'react';
import { GlobalProvider } from './context/GlobalState';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <h1>Expense Tracker</h1>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
