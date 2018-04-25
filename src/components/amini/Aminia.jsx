import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import { Button, Fa } from 'mdbreact'

import logo from '../../logo.svg';

export default class Aminia extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">HI!!!</h1>
        </header>
        <h2>Welcome to Aminia</h2>

        <p className="App-intro">
         Is <code>this</code> working? Yeup!!!!
        </p>
        <Button color="primary"><Fa icon="magic" className="mr-1"/> Testing</Button>
        <p>Is this for real!!</p>

        <p>
          Click <Link to="/contact">Here</Link> to contact us.
        </p>

      </div>
    )
  }
}
