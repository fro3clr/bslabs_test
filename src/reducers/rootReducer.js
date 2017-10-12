import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
  REMOVE_POST,
  APPROVE_POST,
  DECLINE_POST
} from "../actions/posts";
import { ADD_COMMENT, REMOVE_COMMENT } from "../actions/comments";
import { SAVE_STORAGE } from "../actions/storage";
import posts from "./posts";
import comments from "./comments";
import storage from "./storage";

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
    case SAVE_STORAGE:
      return storage(state, action);
    default:
      return state;
  }
};

export default rootReducer;
