import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from '../components/nav/navbar';
import MainView from '../views/Main.view';
import UserProfile from '../views/User.view';

const PrivateRoute = () => {
  return (
    <>
      <NavBar />
      <Route exact path="/" component={MainView} />
      <Route exact path="/user" component={UserProfile} />
    </>
  );
};

export default PrivateRoute;
