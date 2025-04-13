import React from 'react';
import PropTypes from 'prop-types';
import ExpenseRow from './ExpenseRow';

const ExpenseTable = ({ expenses, onDelete }) => {
  if (!expenses || expenses.length === 0) {
    return <p className="no-expenses">No expenses found</p>;
  }

  return (
    <table aria-label="Expenses">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Amount</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <ExpenseRow 
            key={`${expense.name}-${expense.amount}`} 
            expense={expense} 
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
};

ExpenseTable.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      amount: PropTypes.number.isRequired
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired
};

export default ExpenseTable;
