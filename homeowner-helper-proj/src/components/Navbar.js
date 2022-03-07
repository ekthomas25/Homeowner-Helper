import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
      <li><Link to="/">Home Helper</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/signup">Signup</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

