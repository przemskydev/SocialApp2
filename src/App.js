import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import Login from './views/Login.view';
import Register from './views/Register.view';

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
