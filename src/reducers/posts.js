const initialState = [
  // Making our initialState list empty.
  // {
  //   content: "Write code! Yay!! Am testing with a long long post. Lets try extra long. Let me make this the longest i can try."
  // }
]


export default function posts(state=initialState, action){
  let postList = state.slice();

  switch (action.type) {

    case 'FETCH_POSTS':
      return [...state, ...action.posts];

    case 'ADD_POST':
    /*
      content is undefined error in Aminia.jsx was  because i had
      action.content instead of action.post.

      To order by latest post we have action.post before state
    */
      return [action.post, ...state];

    case 'EDIT_POST':
      let postToEdit = postList[action.index];
      postToEdit.content = action.post.content;
      postList.splice(action.index, 1, postToEdit)
      return postList;

    case 'DELETE_POST':
      postList.splice(action.index, 1);
      return postList

    default:
      return state
  }
}
