import React, {Component} from "react";
import {connect} from "react-redux";

import {Link} from "react-router-dom";

import {Container, Input, Button, Fa} from "mdbreact"

class Login extends Component {

  state = {
    username: "",
    password: "",
  }

  onSubmit = event => {
    event.preventDefault()
    console.error("Not implemented!!!");
  }

  render() {
    return(
      <Container>
        <h2 className="mb-5">Login</h2>
        <form onSubmit={this.onSubmit}>
          <fieldset>
            <p className="h5 text-center mb-4">Sign In</p>
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
              <Button type="submit" icon="" color="primary">
                <Fa icon="check-circle-o" className="mr-1"/>Login
              </Button>
            </div>
            <p>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </fieldset>
        </form>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {};
}

const mapDispatchToProps = dispatch => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
