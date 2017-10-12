import { fromJS } from "immutable";
import _ from "lodash";
import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
  REMOVE_POST,
  APPROVE_POST,
  DECLINE_POST
} from "../actions/posts";

const posts = (state, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return state.set("posts", fromJS({ isFetching: true, list: [] }));
    case RECEIVE_POSTS:
      return state
        .setIn(["posts", "isFetching"], false)
        .mergeIn(["posts", "list"], _.toArray(action.posts));
    case REMOVE_POST:
      return state.setIn(
        ["posts", "list"],
        state
          .getIn(["posts", "list"])
          .remove(
            state
              .getIn(["posts", "list"])
              .findKey(post => post.get("id") === action.postId)
          )
      );
    case APPROVE_POST: {
      const post = state
        .getIn(["posts", "list"])
        .findKey(post => post.get("id") === action.postId);
      return state.setIn(
        ["posts", "list", post, "likes"],
        state.getIn(["posts", "list", post]).get("likes") + 1
      );
    }
    case DECLINE_POST: {
      const post = state
        .getIn(["posts", "list"])
        .findKey(post => post.get("id") === action.postId);
      return state.setIn(
        ["posts", "list", post, "likes"],
        state.getIn(["posts", "list", post]).get("likes") - 1
      );
    }
    default:
      return state;
  }
};

export default posts;
