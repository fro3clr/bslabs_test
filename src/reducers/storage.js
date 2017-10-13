import { List } from 'immutable';
import { READ_FROM_STORAGE, SAVE_POST, UNSAVE_POST } from '../actions/storage';

const storage = (state, action) => {
  switch (action.type) {
    case READ_FROM_STORAGE:
      return state.setIn(["savedPosts", "list"], action.savedPosts || List());
    case SAVE_POST: {
       return state
                .setIn(
                    ["savedPosts", "list"],
                    state
                        .getIn(["savedPosts", "list"])
                        .push(action.post));
    }
    case UNSAVE_POST: {
      const posts = state.getIn(["savedPosts", "list"]);

      let postsWithoutTarget = posts.filter(e => {
        return e.id !== action.post.id;
      });

      if(posts.length == 1) {postsWithoutTarget = List();}
      return state.setIn(["savedPosts", "list"], postsWithoutTarget);
    }
    default:
      return state;
  }
};

export default storage;
