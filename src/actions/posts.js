export const addPost = content => {
  return {
    type: 'ADD_POST',
    content
  }
}
export const editPost = (id, content) => {
  return {
    type: 'EDIT_POST',
    id,
    content
  }
}
export const deletPost = id => {
  return {
    type: 'DELETE_POST',
    id
  }
}

/*
  I think the type property is the one we refer to in
  reducers/posts.js as action.type in the switch.
*/
