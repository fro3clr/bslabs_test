import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
  REMOVE_POST,
  APPROVE_POST,
  DECLINE_POST
} from "../actions/posts";
import { ADD_COMMENT, REMOVE_COMMENT } from "../actions/comments";
import { READ_FROM_STORAGE, SAVE_POST, UNSAVE_POST } from "../actions/storage";
import comments from "./comments";
import storage from "./storage";
import posts from "./posts";

const rootReducer = (state, action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
    case REMOVE_POST:
    case APPROVE_POST:
    case DECLINE_POST:
      return posts(state, action);
    case ADD_COMMENT:
    case REMOVE_COMMENT:
      return comments(state, action);
    case READ_FROM_STORAGE:
    case SAVE_POST:
    case UNSAVE_POST:
      return storage(state, action);
    default:
      return state;
  }
};

export default rootReducer;
