import { fromJS } from "immutable";
import { REQUEST_POSTS, RECEIVE_POSTS, REMOVE_POST } from "../actions/posts";
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
    default:
      return state;
  }
};

export default posts;
