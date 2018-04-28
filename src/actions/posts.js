export const fetchPosts = () => {
  return dispatch => {

    let headers = {"Content-Type": "application/json"};

    return fetch("/api/posts/", {headers, })
    .then(res => res.json())
    .then(posts => {
      console.log(posts);
      return dispatch({
        type: 'FETCH_POSTS',
        posts
      })
    })
  }
}

export const addPost = content => {
  return dispatch => {

    let headers = {"Content-Type": "application/json"};
    let body = JSON.stringify({content, });

    return fetch("/api/posts/", {headers, method: "POST", body})
    .then(res => res.json())
    .then(post => {
      return dispatch({
        type: 'ADD_POST',
        post
      })
    })
  }
}


export const editPost = (index, content) => {
  return (dispatch, getState) => {

    let headers = {"Content-Type": "application/json"};
    let body = JSON.stringify({content, });
    let postId = getState().posts[index].id;

    return fetch(`/api/posts/${postId}/`, {headers, method: "PUT", body})
    .then(res => res.json())
    .then(post => {
      return dispatch({
        type: 'EDIT_POST',
        post,
        index
      })
    })
  }
}
export const deletePost = index => {

  return (dispatch, getState) => {
    let headers = {"Content-Type": "application/json"};
    let postId = getState().posts[index].id;

    return fetch(`/api/posts/${postId}/`, {headers, method:"DELETE"})
    .then(res =>{
      if(res.ok) {
        return dispatch({
          type: 'DELETE_POST',
          index
        })
      }
    })
  }

}

/*
  I think the type property is the one we refer to in
  reducers/posts.js as action.type in the switch.
*/
