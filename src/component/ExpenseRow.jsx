import React from 'react';
import PropTypes from 'prop-types';

const ExpenseRow = ({ expense, onDelete }) => {
  const formatAmount = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  return (
    <tr>
      <td>{expense.name || '-'}</td>
      <td>{expense.description || '-'}</td>
      <td>{formatAmount(expense.amount)}</td>
    </tr>
  );
};

ExpenseRow.propTypes = {
  expense: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    amount: PropTypes.number.isRequired
  }).isRequired
};

export default ExpenseRow;
