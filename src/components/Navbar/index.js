import React, {useState} from 'react';
import { NavLink as Link } from 'react-router-dom';
import Logo from '../../assets/dante-patient-logo.png';
import { ReactComponent as Toggler } from '../../assets/toggler.svg';
import './index.scss';

const Navbar = () => {
  const [display, setDisplay] = useState(false);
  return (
    <div className="nav-layout">
      <div className="nav-col-container">
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
          <div className="nav-toggler" onClick={() => setDisplay(!display)}>
            <Toggler width={30} height={30}/>
          </div>
        </div>
        <ul className={"nav-expand-menu " + (display ? 'show' : 'hide')}>
          <li>
            <Link to="/" exact
                  className="item"
                  activeClassName="active"
                  onClick={() => setDisplay(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/documentation"
                  className="item"
                  activeClassName="active"
                  onClick={() => setDisplay(false)}>
              Documentation
            </Link>
          </li>
          <li>
            <Link to="/faqs"
                  className="item"
                  activeClassName="active"
                  onClick={() => setDisplay(false)}>
              FAQs
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;