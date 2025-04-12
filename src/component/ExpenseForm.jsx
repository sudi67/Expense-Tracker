import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ExpenseForm = ({ addExpense }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !amount) return;
    
    addExpense({
      name,
      description,
      amount: parseFloat(amount)
    });
    
    setName('');
    setDescription('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <div>
        <label htmlFor="name">Name*</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="amount">Amount*</label>
        <input
          id="amount"
          type="number"
          min="0"
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
};

ExpenseForm.propTypes = {
  addExpense: PropTypes.func.isRequired
};

export default ExpenseForm;
