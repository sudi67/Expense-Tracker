import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span>Expense Tracker</span>
      </div>
      <div className="navbar-buttons">
        <button 
          onClick={() => navigate('/')}
          className="nav-button"
        >
          Home
        </button>
        <button 
          onClick={() => navigate('/expenses')}
          className="nav-button"
        >
          Expenses
        </button>
        <button 
          onClick={() => navigate('/reports')}
          className="nav-button"
        >
          Reports
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
