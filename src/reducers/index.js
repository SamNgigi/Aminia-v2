import {combineReducers} from 'redux';
import posts from "./posts";
import auth from "./auth";

const postApp = combineReducers({
  posts, auth,
})

export default postApp;

/*
  Using the above code we can combine multiple reducers into
  one.

  Now we need to create a redux store using this reducer.
*/
