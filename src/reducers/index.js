import {combineReducers} from 'redux';
import posts from "./posts";

const postApp = combineReducers({
  posts
})

export default postApp;

/*
  Using the above code we can combine multiple reducers into
  one.

  Now we need to create a redux store using this reducer.
*/
