import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ExpenseForm from './component/ExpenseForm';
import ExpenseTable from './component/ExpenseTable';
import SearchBar from './component/SearchBar';
import Navbar from './component/Navbar';
import './App.css';

import Home from './component/Home';
import Reports from './component/Reports';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const filteredExpenses = expenses.filter(expense =>
    expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expenses" element={
          <>
            <SearchBar setSearchTerm={setSearchTerm} />
            <ExpenseForm addExpense={addExpense} />
            <ExpenseTable expenses={filteredExpenses} />
          </>
        } />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </div>
  );
};

export default App;
