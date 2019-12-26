import React from 'react';
import {NavLink as Link} from 'react-router-dom';
import './DetailBanner.scss';

function DetailBanner() {
  return (
    <div className="feat-details">
      <div className="feat-details-container">
        <div className="feat-details-text">
          Please visit our documentation page for more details...
        </div>
        <div className="feat-details-btn">
          <Link to="/documentation" className="feat-details-btn-link">
            View Documentation
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DetailBanner;