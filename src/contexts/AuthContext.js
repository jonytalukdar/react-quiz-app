import React, { createContext } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const singup = () => {
    console.log('signing');
  };

  return (
    <AuthContext.Provider value={{ singup }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
