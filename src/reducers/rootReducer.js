import { REQUEST_POSTS, RECEIVE_POSTS, REMOVE_POST } from "../actions/posts";

import posts from "./posts";

const rootReducer = (state, action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
    case REMOVE_POST:
      return posts(state, action);
    default:
      return state;
  }
};

export default rootReducer;
