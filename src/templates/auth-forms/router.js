import React from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import Login from "./components/Login";
import Register from "./components/Register";

const RoutesMain = () => (

  <Router>
    <Switch>
      <Route path='/register' component={Register}/>
      <Route path='/login' component={Login}/>
      <Route path='/' component={Login}/>
    </Switch>
  </Router>

);

export default RoutesMain;