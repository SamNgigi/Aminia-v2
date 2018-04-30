import React, { Component } from 'react';
/*

React-router-dom is a library used for in-application routing in react apps.
Using it we can mount components on urls of our choice

*/
import {Route, Switch, BrowserRouter} from 'react-router-dom';


import './App.css';

import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import postApp from "./reducers";

import Login from "./components/auth/Login";
import Aminia from './components/amini/Aminia';
import NotFound from './components/4o4/NotFound';


let store = createStore(postApp, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Aminia} />
            <Route exact path="/login" component={Login} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
