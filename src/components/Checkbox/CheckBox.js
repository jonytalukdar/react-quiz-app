import React from 'react';

const CheckBox = ({ type, value, onChange }) => {
  return (
    <label>
      <input type={type} value={value} checked={value} onChange={onChange} />{' '}
      <span>I agree to the Terms & Conditions</span>
    </label>
  );
};

export default CheckBox;
