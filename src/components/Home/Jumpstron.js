import React from 'react';
import './Jumpstron.scss';
import HeaderImage from '../../assets/header-img.png';
import { HashLink as Link } from 'react-router-hash-link';

function Jumpstron() {
  return (
    <div className="js-layout">
      <div className="js-container">
        <div className="js-text">
          <div className="js-title">
            Dante Patient
          </div>
          <div className="js-description">
            Empower patients and improve patient visit experience
          </div>
          <div className="js-subscript">
            @ Department of Radiation Oncology, UCI Medical Center
          </div>
          <div className="js-links">
            <a className="js-link-btn github"
               href="https://github.com/team-dante/Dante-Patient-Swift"
               target="_blank"
               rel="noopener noreferrer"
            >
              View on Github
            </a>
            <Link className="js-link-btn start" to="/documentation#getting-started">
              Get Started
            </Link>
          </div>
        </div>
        <div className="js-img">
          <img src={HeaderImage} alt="dante-patient-app" />
        </div>
      </div>
    </div>
  );
};

export default Jumpstron;