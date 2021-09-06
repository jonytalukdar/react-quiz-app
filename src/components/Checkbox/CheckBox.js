import React from 'react';

const CheckBox = ({ type }) => {
  return (
    <label>
      <input type={type} /> <span>I agree to the Terms & Conditions</span>
    </label>
  );
};

export default CheckBox;
