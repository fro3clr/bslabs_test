import { fromJS } from "immutable";
import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
  REMOVE_POST,
  APPROVE_POST,
  DECLINE_POST
} from "../actions/posts";
import _ from "lodash";

const posts = (state, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return state.set("posts", fromJS({ isFetching: true, list: [] }));
    case RECEIVE_POSTS:
      console.log(action.posts);
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
    case APPROVE_POST:
      const postForApprove = state
        .getIn(["posts", "list"])
        .findKey(postForApprove => postForApprove.get("id") === action.postId);
      return state.setIn(
        ["posts", "list", postForApprove, "likes"],
        state.getIn(["posts", "list", postForApprove]).get("likes") + 1
      );

    case DECLINE_POST:
      const postForDecline = state
        .getIn(["posts", "list"])
        .findKey(postForDecline => postForDecline.get("id") === action.postId);
      return state.setIn(
        ["posts", "list", postForDecline, "likes"],
        state.getIn(["posts", "list", postForDecline]).get("likes") - 1
      );

    default:
      return state;
  }
};

export default posts;
