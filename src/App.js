import React, { Component } from 'react';
import { Button, Fa } from 'mdbreact'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">HI!!!</h1>
        </header>
        <p className="App-intro">
         Is <code>this</code> working? Yeup!!!!
        </p>
        <Button color="primary"><Fa icon="magic" className="mr-1"/> Testing</Button>
      </div>
    );
  }
}

export default App;
