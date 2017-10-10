import {
  REQUEST_POSTS,
  RECEIVE_POSTS
} from "../actions/posts";

import posts from "./posts";

const rootReducer = (state, action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return posts(state, action);
    default:
      return state;
  }
};

export default rootReducer;
