import React from 'react';

const CheckBox = ({ type, value, checked, onChange, text }) => {
  return (
    <label>
      <input type={type} checked={checked} onChange={onChange} />{' '}
      <span>{text}</span>
    </label>
  );
};

export default CheckBox;
