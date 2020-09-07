import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { mainView, login, register } from './routes/index'
import MainView from './views/Main.view';
import Login from './views/Login.view';
import Register from './views/Register.view';

function App() {
  return (
    <Router>
      <Route exact path="/" component={MainView} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </Router>
  );
}

export default App;
