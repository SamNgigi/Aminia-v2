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
export const editPost = (id, content) => {
  return {
    type: 'EDIT_POST',
    id,
    content
  }
}
export const deletePost = id => {
  return {
    type: 'DELETE_POST',
    id
  }
}

/*
  I think the type property is the one we refer to in
  reducers/posts.js as action.type in the switch.
*/
