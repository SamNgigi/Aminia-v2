import React, { Component } from 'react';
/*

React-router-dom is a library used for in-application routing in react apps.
Using it we can mount components on urls of our choice

*/
import {Route, Switch, BrowserRouter} from 'react-router-dom';


import './App.css';

import Aminia from './components/amini/Aminia';
import NotFound from './components/4-o-4/NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Aminia} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
