export const fetchPosts = () => {
  return (dispatch, getState) => {

    let headers = {"Content-Type": "application/json"};
    let {token} = getState().auth;

    if (token) {
      headers["Authorization"] = `Token ${token}`
    }

    return fetch("/api/posts/", {headers, })
    .then(res => {
      if (res.status < 500) {
        return res.json().then(data => {
          return {status: res.status, data};
        })
      } else {
        console.log("Server Error!");
        throw res;
      }
    })
    .then(res => {
      if (res.status === 200){
        return dispatch({type:'FETCH_POSTS', posts:res.data});
      } else if (res.status === 401 || res.status === 403) {
        dispatch({type: "AUTHENTICATION_ERROR", data: res.data});
        throw res.data;
      }
    })
  }
}

export const addPost = content => {
  return (dispatch, getState) => {

    let headers = {"Content-Type": "application/json"};
    let {token} = getState().auth;

    if (token) {
      headers["Authorization"]= `Token ${token}`;
    }

    let body = JSON.stringify({content, });
    return fetch("/api/posts/", {headers, method: "POST", body})
    .then(res => {
      if(res.status < 500) {
        return res.json().then(data => {
          return {status: res.status, data};
        })
      } else {
        console.log("Server Error!");
        throw res;
      }
    })
    .then(res => {
      if (res.status === 201) {
        return dispatch({type: 'ADD_POST', post:res.data});
      } else if (res.status ===401 || res.status === 403) {
        dispatch({type: "AUTHENTICATION_ERROR", data:res.data});
        throw res.data;
      }
    })
  }
}


export const editPost = (index, content) => {
  return (dispatch, getState) => {

    let headers = {"Content-Type": "application/json"};
    let {token} = getState().auth;

    if (token) {
      headers["Authorization"] = `Token ${token}`;
    }

    let body = JSON.stringify({content, });
    let postId = getState().posts[index].id;

    return fetch(`/api/posts/${postId}/`, {headers, method: "PUT", body})
    .then(res => {
      if (res.status < 500) {
        return res.json().then(data => {
          return {status: res.status, data};
        })
      } else {
        console.log("Server Error!");
        throw res;
      }
    })
    .then(res => {
      if (res.status === 200) {
        return dispatch({type: 'EDIT_POST', post: res.data, index});
      } else if (res.status === 401 || res.status === 403) {
        dispatch({type: "AUTHENTICATION_ERROR", data: res.data});
        throw res.data;
      }
    })
  }
}
export const deletePost = index => {

  return (dispatch, getState) => {

    let headers = {"Content-Type": "application/json"};
    let {token} = getState().auth;

    if (token) {
      headers["Authorization"] = `Token ${token}`;
    }

    let postId = getState().posts[index].id;
    return fetch(`/api/posts/${postId}/`, {headers, method:"DELETE"})
    .then(res => {
      if (res.status ===204) {
        return {status: res.status, data: {}};
      } else if (res.status < 500) {
        return res.json().then(data => {
          return {status: res.status, data};
        })
      } else {
        console.log("Server Error!");
        throw res;
      }
    })
    .then(res => {
      if (res.status === 204) {
        return dispatch({type: 'DELETE_POST', index});
      } else if (res.status === 401 || res.status === 403) {
        dispatch({type: "AUTHENTICATION_ERROR", data: res.data});
        throw res.data;
      }
    })
  }

}

/*
  I think the type property is the one we refer to in
  reducers/posts.js as action.type in the switch.

  posts.js:7 Uncaught (in promise) SyntaxError: Unexpected token < in JSON at position 0
    at posts.js:7

  Above error still persists. Not sure why but all functionality working.


  We make sure that the authorization token is sent with all note
  related API calls. Relevant actions are dispatched depending upon
  the type of response we receive.
*/
