import React, {Component} from "react";
import {connect} from "react-redux";

import {Link, Redirect} from "react-router-dom";

import {auth} from "../../actions"

import {Container, Input, Button, Fa} from "mdbreact"

class Login extends Component {

  // state = {
  //   username: "",
  //   password: "",
  // } Testing

  onSubmit = event => {
    event.preventDefault()
<<<<<<< HEAD
    this.props.login(this.state.username, this.state.password);
=======
    this.props.login(this.state.username, this.state.password)
>>>>>>> Working-Login
    // console.error("Not implemented!!!");
  }

  render() {
<<<<<<< HEAD
    if(this.props.isAuthenticated){
      return <Redirect to ="/"/>
=======
    if (this.props.isAuthenticated){
      return <Redirect to="/" />
>>>>>>> Working-Login
    }
    return(
      <Container className="mt-2">
        <h2 className="mb-2">Login Form</h2>
        <form onSubmit={this.onSubmit}>
          <fieldset>
            <p className="h5 text-center mb-4">Sign In</p>
            {this.props.errors.length > 0 && (
<<<<<<< HEAD
              <ul>
=======
              <ul className="mb-5">
>>>>>>> Working-Login
                {this.props.errors.map(error => (
                  <li key={error.field}>{error.message}</li>
                ))}
              </ul>
            )}
            <Input
              id="username"
              label="Your Username"
              icon="user"
              group type="text"
              validate error="wrong"
              success="right"
              onChange = { event => this.setState({username: event.target.value})}
              className="mb-5"
            />
            <Input
              id="password"
              label="Your Password"
              icon="lock"
              group type="password"
              onChange={event => this.setState({password: event.target.value})}
              className="mt-5"
            />

            <div className="text-center">
              <Button type="submit" color="primary">
                <Fa icon="check-circle-o" className="mr-1"/>Login
              </Button>
            </div>
            <p className="text-center">
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </fieldset>
        </form>
      </Container>
    )
  }
}

const mapStateToProps = state => {
<<<<<<< HEAD
  let errors = [];
  if (state.auth.errors){
=======
  let errors = []
  if (state.auth.errors) {
>>>>>>> Working-Login
    errors = Object.keys(state.auth.errors).map(field => {
      return {
        field, message: state.auth.errors[field]
      };
    })
<<<<<<< HEAD
  }
  return {
    errors,
    isAuthenticated:state.auth.isAuthenticated
=======
    }
  return {
    errors,
    isAuthenticated: state.auth.isAuthenticated
>>>>>>> Working-Login
  };
}

const mapDispatchToProps = dispatch => {
  return {
<<<<<<< HEAD
    login: (username, password) =>{
      return dispatch(auth.login(username, password));
=======
    login: (username, password) => {
      return dispatch(auth.login(username, password))
>>>>>>> Working-Login
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
