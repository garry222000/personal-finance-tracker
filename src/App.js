import React, { useState } from 'react';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [transactionName, setTransactionName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTransactions([
      ...transactions,
      { name: transactionName, amount: parseFloat(amount) }
    ]);
    setTransactionName('');
    setAmount('');
  };

  const totalBalance = transactions.reduce((total, transaction) => total + transaction.amount, 0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Personal Finance Tracker</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Transaction Name:
            <input
              type="text"
              value={transactionName}
              onChange={(e) => setTransactionName(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Amount:
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </label>
          <br />
          <button type="submit">Add Transaction</button>
        </form>
        <h2>Transactions</h2>
        <ul>
          {transactions.map((transaction, index) => (
            <li key={index}>
              {transaction.name}: ${transaction.amount.toFixed(2)}
            </li>
          ))}
        </ul>
        <h2>Balance: ${totalBalance.toFixed(2)}</h2>
      </header>
    </div>
  );
}

export default App;
