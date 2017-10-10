import { fromJS } from "immutable";
import { REQUEST_POSTS, RECEIVE_POSTS } from "../actions/posts";
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
    default:
      return state;
  }
};

export default posts;
