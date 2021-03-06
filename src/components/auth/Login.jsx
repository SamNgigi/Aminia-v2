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
    this.props.login(this.state.username, this.state.password)
    // console.error("Not implemented!!!");
  }

  render() {
    if (this.props.isAuthenticated){
      return <Redirect to="/" />
    }
    return(
      <Container className="mt-2">
        <h2 className="mb-5">Login Form</h2>
        <form onSubmit={this.onSubmit}>
          <fieldset>
            <p className="h5 text-center mb-5">Sign In</p>
            {this.props.errors.length > 0 && (
              <ul className="mb-5">
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
              className="mb-5 mt-5"
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
                <Fa icon="check-key" className="mr-1"/>Login
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
  let errors = []
  if (state.auth.errors) {
    errors = Object.keys(state.auth.errors).map(field => {
      return {
        field, message: state.auth.errors[field]
      };
    })
    }
  return {
    errors,
    isAuthenticated: state.auth.isAuthenticated
  };
}

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) => {
      return dispatch(auth.login(username, password))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
