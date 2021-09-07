import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';

const PublicRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useContext(AuthContext);

  return !currentUser ? (
    <Route {...rest}>{(props) => <Component {...props} />}</Route>
  ) : (
    <Redirect to="/" />
  );
};

export default PublicRoute;
