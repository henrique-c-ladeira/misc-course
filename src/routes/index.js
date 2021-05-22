import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// import App from '../App';
import Home from '../modules/home';
import Contact from '../modules/contact';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/contact" component={Contact} />
      <Redirect from="/*" to="/" />
    </Switch>
  </Router>
);

export default Routes;
