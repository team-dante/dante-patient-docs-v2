import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import Logo from '../../assets/dante-patient-logo.png';
import './index.scss';

const Navbar = () => {
  return (
    <div className="nav-layout">
      <div className="nav-container">
        <Link to="/" exact>
          <div className="nav-logo">
            <img src={Logo} alt="logo" />
          </div>
        </Link>
        <ul className="nav-menu">
          <li>
            <Link to="/" exact className="item" activeClassName="active">Home</Link>
          </li>
          <li>
            <Link to="/documentation" className="item" activeClassName="active">Documentation</Link>
          </li>
          <li>
            <Link to="/faqs" className="item" activeClassName="active">FAQs</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;