import React, { Component } from 'react';
/*

React-router-dom is a library used for in-application routing in react apps.
Using it we can mount components on urls of our choice

*/
import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom';


import './App.css';

import {Provider, connect} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import {auth} from "./actions";
import postApp from "./reducers";

import Login from "./components/auth/Login";
import Aminia from './components/amini/Aminia';
import NotFound from './components/4o4/NotFound';


let store = createStore(postApp, applyMiddleware(thunk));

class RootContainerComponent extends Component {

  componentDidMount() {
    this.props.loadUser();
  }

  PrivateRoute = ({component: ChildComponent, ...rest}) => {
    return <Route {...rest} render={props => {
      if (this.props.auth.isLoading) {
        return <em>Loading...</em>;
      } else if (!this.props.auth.isAuthenticated) {
        return <Redirect to="/login"/>;
      } else {
        return <ChildComponent {...props} />
      }
    }}/>
  }

  render() {
    let {PrivateRoute} = this;
    return (
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path="/" component={Aminia} />
          <Route exact path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }

}


const mapStateToProps = state => {
  return {
    auth: state.auth,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadUser: () => {
      return dispatch(auth.loadUser());
    }
  }
}

let RootContainer = connect(mapStateToProps, mapDispatchToProps)(RootContainerComponent)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )
  }
}
