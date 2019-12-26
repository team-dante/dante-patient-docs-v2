import React, { useContext } from 'react';
import './SideNav.scss';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import MenuContext from './MenuContext';

const SideNav = () => {

  const activeMenuItem = useContext(MenuContext);
  // console.log(activeMenuItem);

  const scrollHandle = (el) => {
     window.scrollTo({top: el.offsetTop - 44, behavior: 'auto'});
  };

  return (
    <div className="sn-list">
      <ul>
        <li>
          <NavLink smooth to="/documentation#introduction" className="item"
                   scroll={scrollHandle}
                   activeClassName={activeMenuItem === 1 ? "active" : ''}
          >
            Introduction
          </NavLink>
        </li>
        <li>
          <NavLink smooth to="/documentation#getting-started" className="item"
                   scroll={scrollHandle}
                   activeClassName={activeMenuItem === 2 ? "active" : ''}
          >
            Getting Started
          </NavLink>
        </li>
        <li>
          <NavLink smooth to="/documentation#features" className="item"
                   scroll={scrollHandle}
                   activeClassName={activeMenuItem === 3 ? "active" : ''}
          >
            Features
          </NavLink>
        </li>
        <ul>
          <li>
            <NavLink smooth to="/documentation#oncology-map" className="item"
                     scroll={scrollHandle}
                     activeClassName={activeMenuItem === 4 ? "active" : ''}
            >
              Oncology Map
            </NavLink>
          </li>
          <li>
            <NavLink smooth to="/documentation#time-tracking" className="item"
                     scroll={scrollHandle}
                     activeClassName={activeMenuItem === 5 ? "active" : ''}
            >
              Time Tracker
            </NavLink>
          </li>
          <li>
            <NavLink smooth to="/documentation#stats" className="item"
                     scroll={scrollHandle}
                     activeClassName={activeMenuItem === 6 ? "active" : ''}
            >
              Statistics
            </NavLink>
          </li>
          <li>
            <NavLink smooth to="/documentation#profile" className="item"
                     scroll={scrollHandle}
                     activeClassName={activeMenuItem === 7 ? "active" : ''}
            >
              Profile
            </NavLink>
          </li>
        </ul>
        <li>
          <NavLink smooth to="/documentation#future" className="item"
                   scroll={scrollHandle}
                   activeClassName={activeMenuItem === 8 ? "active" : ''}
          >
            What's Next
          </NavLink>
        </li>
        <li>
          <NavLink smooth to="/documentation#appendix" className="item"
                   scroll={scrollHandle}
                   activeClassName={activeMenuItem === 9 ? "active" : ''}
          >
            Appendix
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SideNav;