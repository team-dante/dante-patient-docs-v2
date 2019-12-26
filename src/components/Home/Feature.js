import React from 'react';
import './Feature.scss';

const Feature = ({title, description, img, alt, color}) => {
  return (
    <div className="f-container" style={{backgroundColor: color}}>
      <div className="f-text">
        <h4 className="f-title">{title}</h4>
        <div className="f-description">{description}</div>
      </div>
      <div className="f-img">
        <img src={img} alt={alt} />
      </div>
    </div>
  );
};

export default Feature;