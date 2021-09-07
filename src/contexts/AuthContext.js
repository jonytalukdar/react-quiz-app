import React, { createContext, useEffect, useState } from 'react';
import '../firebase.config';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    const auth = getAuth();
    const clear = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsLoading(false);
    });
    return clear;
  }, []);

  //   signup function
  const singup = async (username, email, password) => {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);

    // update profile
    await updateProfile(auth.user, {
      displayName: username,
    });

    const loginUser = auth.user;
    setUser({ ...loginUser });
  };

  //   login function
  const login = (email, password) => {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout function
  const logout = () => {
    const auth = getAuth();
    return signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, singup, login, logout }}>
      {!isLoading && props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
