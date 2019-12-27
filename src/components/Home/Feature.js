import React from 'react';
import './Feature.scss';
import { NavHashLink as NavLink } from 'react-router-hash-link';

const Feature = ({title, description, img, alt, color, link}) => {
  return (
    <div className="f-container" style={{backgroundColor: color}}>
      <div className="f-text">
        <h4 className="f-title">{title}</h4>
        <div className="f-description">{description}</div>
        <NavLink to={link} className="f-button">Learn More</NavLink>
      </div>
      <div className="f-img">
        <img src={img} alt={alt} />
      </div>
    </div>
  );
};

export default Feature;