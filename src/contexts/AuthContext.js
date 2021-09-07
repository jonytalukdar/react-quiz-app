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
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const auth = getAuth();
    const clear = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setIsLoading(false);
    });
    return clear;
  }, []);

  //   signup function
  const signup = async (username, email, password) => {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password);

    // update profile
    await updateProfile(auth.currentUser, {
      displayName: username,
    });

    const user = auth.currentUser;
    setCurrentUser({ ...user });
  };

  //   login function
  const login = (email, password) => {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout function
  const logout = () => {
    console.log('logout success');
    const auth = getAuth();
    return signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ currentUser, signup, login, logout }}>
      {!isLoading && props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
