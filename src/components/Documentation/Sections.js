import React from 'react';
import './Sections.css';

export const Section = ({children, refProp, idProp, title, hType}) => {

  function heading(hType) {
    if (hType === 'h1') {
      return <h1>{title}</h1>;
    } else if (hType === 'h2') {
      return <h2>{title}</h2>;
    } else if (hType === 'h3') {
      return <h3>{title}</h3>
    }
    return null;
  }

  return (
    <div ref={refProp} id={idProp} className="doc-styles">
      {heading(hType)}
      {children}
    </div>
    );
};

export const SectionFlexLayout = ({children, media, mediaText}) => {
  return (
    <div className="sect-layout">
      <div className="sect-text">
        {children}
      </div>
      <div className="sect-media">
        <img src={media} alt={mediaText} />
      </div>
    </div>
  );
};

export const Highlight = ({children, title, media, mediaWidth, mediaText}) => {
  return (
    <div className="highlight">
      <div className="hl-header">
        {title}
      </div>
      {children}
      <div className="hl-img-container">
        <img src={media}
             alt={mediaText}
             style={{maxWidth: mediaWidth ? mediaWidth + '%' : '50%'}}/>
      </div>
    </div>
  );
};
