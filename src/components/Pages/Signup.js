import React from 'react';
import Illustration from '../Illustration/Illustration';
import Form from '../SignupForm.js/Form';

const Signup = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <Form />
      </div>
    </>
  );
};

export default Signup;
