import React from 'react';
import '../App.css';
import { useSelector } from 'react-redux';
function Navbar () {
  const amount = useSelector(state => state.amount);
  return (
    <div style={{ position: 'fixed', width: '100%' }}>
      <header>
        <nav className="navbar" >
          <ul style={{ display: 'flex' }}>
            <li ><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>

            <li className='amount' style={{ background: 'white', color: 'black' }} > Balance:{amount}</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
