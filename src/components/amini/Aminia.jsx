import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import { Button, Fa, ListGroup, ListGroupItem } from 'mdbreact'

import logo from '../../logo.svg';
import './Aminia.css'

export class Aminia extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">HI!!! Welcome to Aminia!</h1>
        </header>

        <p className="App-intro">
          What's <code>good</code> Fam!
        </p>

        <h3>Posts</h3>
        <div className="container my-5">
          <div className="row">
            <div className="col"></div>
            <div className="col-lg-10">
              <ListGroup className="list-group">
                  {this.props.posts.map((post, id) =>(
                    <ListGroupItem key={`post_${id}`} className="list-item">
                          <p className="d-inline">{post.content}</p>

                        <div className="d-inline float-right p-3">
                          <Button color="cyan" >
                            <Fa icon="edit" className="mr-1"/> Edit
                          </Button>

                          <Button color="danger">
                            <Fa icon="trash" className="mr-1"/> Delete
                          </Button>
                        </div>

                    </ListGroupItem>
                  ))}
              </ListGroup>
            </div>
            <div className="col"></div>
          </div>
        </div>

        <Button color="primary"><Fa icon="magic" className="mr-1"/> Testing</Button>
        <p>Is this for real!!</p>

        <p>
          Click <Link to="/contact">Here</Link> to contact us.
        </p>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts,
  }
}

const mapDispatchToProps = state => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Aminia)
