import React from 'react';

export const NextArrow = (props) => {
  return (
    <button
      className={props.className}
      style={{
        ...props.style,
        backgroundColor: '#ff5722', // BookMyShow orange color
        color: 'white',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        border: 'none',
      }}
      onClick={props.onClick}
    >
      <i className="fas fa-chevron-right" /> {/* You can use a right arrow icon here */}
    </button>
  );
};

export const PrevArrow = (props) => {
  return (
    <button
      className={props.className}
      style={{
        ...props.style,
        backgroundColor: '#ff5722', // BookMyShow orange color
        color: 'white',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        border: 'none',
      }}
      onClick={props.onClick}
    >
      <i className="fas fa-chevron-left" /> {/* You can use a left arrow icon here */}
    </button>
  );
};
