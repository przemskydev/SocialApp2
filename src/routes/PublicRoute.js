import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../views/Login.view';
import Register from '../views/Register.view';

const PublicRoute = () => (
  <>
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
  </>
);

export default PublicRoute;
