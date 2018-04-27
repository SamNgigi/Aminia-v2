import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import { Button, Fa, ListGroup, ListGroupItem, FormInline, Input } from 'mdbreact'

import logo from '../../logo.svg';
import './Aminia.css'

import {posts} from "../../actions";

class Aminia extends Component {

  state = {
    content: "",
    editPostId: null,
  }

  resetForm = () => {
    this.setState({
      content: "",
      editPostId: null
    });
  }

  // When we press the edit button
  selectForEdit = (id) => {
    // I think this.props.posts[id] means
    // the id property for this post
    let post = this.props.posts[id]
    this.setState({
      content: post.content,
      editPostId: id
    })
  }

  submitPost = (event) => {
    event.preventDefault();
    if(this.state.editPostId === null) {
      this.prop.addPost(this.state.content).then(this.resetForm)
    } else {
      this.props.editPost(this.state.editPostId, this.state.content).then(this.resetForm)
    }
  }

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

        <h3>Add new post</h3>


        <div className="container">
          <div className="row">
            <div className="col"></div>
            <div className="col-lg-10 ml-5">
              <FormInline className="add-note" onSubmit={this.submitPost}>
                <Input
                  label="Tell us what you like."
                  icon="pencil"
                  placeholder="Enter post here..."
                  onChange={(event) => this.setState({text: event.target.value})}
                  value={this.state.content}
                />

                <div className="float-right">
                  <Button color="mdb-color" onClick={this.resetForm}>Reset</Button>
                  <Button color="success" type="submit">Submit</Button>
                </div>
              </FormInline>
            </div>
            <div className="col"></div>
          </div>
        </div>


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
// From reducers  to view/store
const mapStateToProps = state => {
  return {
    posts: state.posts,
  }
}
// From view to actions to reducers then back to view/store
const mapDispatchToProps = dispatch => {
  return {
    addPost: (content) => {
      dispatch(posts.addPost(content));
    },
    editPost: (id, content) => {
      dispatch(posts.editPost(id, content));
    },
    deletePost: (id) => {
      dispatch(posts.deletePost(id));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Aminia)
