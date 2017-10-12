import { List } from "immutable";
import { ADD_COMMENT, REMOVE_COMMENT } from "../actions/comments";

const comments = (state, action) => {
  switch (action.type) {
    case ADD_COMMENT: {
      const post = state
        .getIn(["posts", "list"])
        .findKey(post => post.get("id") === action.postId);

      const commentsList =
        state.getIn(["posts", "list", post, "commentsList"]) || List();
      const updatedList = commentsList.push(action.commentData);

      return state.setIn(["posts", "list", post, "commentsList"], updatedList);
    }

    case REMOVE_COMMENT: {
      const post = state
        .getIn(["posts", "list"])
        .findKey(post => post.get("id") === action.postId);

      return state.setIn(
        ["posts", "list", post, "commentsList"],
        state
          .getIn(["posts", "list", post, "commentsList"])
          .remove(action.commentId)
      );
    }

    default:
      return state;
  }
};

export default comments;
