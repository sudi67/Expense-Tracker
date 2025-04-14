import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ExpenseTable from './ExpenseTable';
import SearchBar from './SearchBar';

const Reports = ({ expenses, onDelete }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredExpenses = expenses.filter(expense => 
    expense.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (expense.description && expense.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="reports">
      <h2>Reports Dashboard</h2>
      <SearchBar setSearchTerm={setSearchTerm} />
      <ExpenseTable expenses={filteredExpenses} onDelete={onDelete} />
    </div>
  );
};

Reports.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      amount: PropTypes.number.isRequired
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired
};

export default Reports;
