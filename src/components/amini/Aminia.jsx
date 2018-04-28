import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {Button,Fa, ListGroup, ListGroupItem } from 'mdbreact'

import logo from '../../logo.svg';
import './Aminia.css'

import {posts} from "../../actions";

class Aminia extends Component {

  componentDidMount(){
    this.props.fetchPosts();
  }

  state = {
    content: "",
    editPostId: null,
  }

  resetForm = () => {
        this.setState({content: "", editPostId: null});
    }


  // When we press the edit Button
  selectForEdit = (id) => {
    // I think this.props.posts[id] means
    // the id property for this post
    let post = this.props.posts[id];
    this.setState({
      content: post.content,
      editPostId: id
    });
  }

  submitPost = (event) => {
    event.preventDefault();
    if(this.state.editPostId === null) {
      // We add .then() method after installing the redux thunk middleware
      this.props.addPost(this.state.content).then(this.resetForm)
    } else {
      this.props.editPost(this.state.editPostId, this.state.content)
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


        <div className="container my-5">
          <div className="row">
            <div className="col"></div>
            <div className="col-lg-10 ml-5">
              <form className="add-note" onSubmit={this.submitPost}>
                <div className="">
                  <input
                    value={this.state.content}
                    label="Tell us what you like."
                    placeholder=""
                    onChange={(event) => this.setState({content: event.target.value})}
                    type="text"
                    required
                  />
                  <span className="highlight"></span>
                  <span className="bar"></span>
                  <label><Fa icon="pencil"/> Tell us what you like.</label>
                </div>
                <div className="float-right mt-3">
                  <Button color="mdb-color" onClick={this.resetForm}>
                    <Fa icon="refresh" className="mr-2"/>Reset
                  </Button>
                  <Button color="success" type="submit">
                    <Fa icon="check-square-o" className="mr-1"/>Submit
                  </Button>
                </div>
              </form>
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
                  {this.props.posts.map((post, id) => (
                    <ListGroupItem key={`post_${id}`} className="list-item">
                          <p className="d-inline">
                             {post.content}
                          </p>
                        <div className="d-inline float-right p-3">
                          <Button color="cyan" onClick={() => this.selectForEdit(id)}>
                            <Fa icon="edit" className="mr-1"/> Edit
                          </Button>

                          <Button color="danger" onClick={() => this.props.deletePost(id)}>
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
    fetchPosts: () => {
      dispatch(posts.fetchPosts())
    },
    addPost: (content) => {
      /*
      We add a return statement to the action dispatch so that we
      can chain additional callbacks to the API call promise.
      */
      return dispatch(posts.addPost(content));
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
