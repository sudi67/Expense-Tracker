import React from 'react';
import PropTypes from 'prop-types';
import ExpenseRow from './ExpenseRow';

const ExpenseTable = ({ expenses }) => {
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
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <ExpenseRow key={`${expense.name}-${expense.amount}`} expense={expense} />
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
  ).isRequired
};

export default ExpenseTable;
