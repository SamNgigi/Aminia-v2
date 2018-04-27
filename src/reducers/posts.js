const initialState = [
  {
    content: "Write code! Yay!! Am testing with a long long post. Lets try extra long. Let me make this the longest i can try."
  }
]


export default function posts(state=initialState, action){
  let postList = state.slice();

  switch (action.type) {

    case 'ADD_POST':
      return [...state, {text:action.content}];

    case 'EDIT_POST':
      let postToEdit = postList[action.id];
      postToEdit.content = action.content;
      postList.splice(action.id,1, postToEdit)
      return postList;

    case 'DELETE_POST':
      postList.splice(action.id, 1);
      return postList

    default:
      return state
  }
}
