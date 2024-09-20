import React from 'react';

const Footer = ({ firstText, secondaryText, firstClick, secondaryClick }) => {
  return (
    <div className="modal-footer">
      {firstText && (
        <button onClick={firstClick} className="btn-primary">
          {firstText}
        </button>
      )}
      {secondaryText && (
        <button onClick={secondaryClick} className="btn-secondary">
          {secondaryText}
        </button>
      )}
    </div>
  );
};

export default Footer;