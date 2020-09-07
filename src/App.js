import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

function App() {
  return (
    <Router>
      <Switch>
        <PublicRoute />
        <PrivateRoute />
      </Switch>
    </Router>
  );
}

export default App;
