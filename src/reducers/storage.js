import { fromJS, List } from "immutable";
import { SAVE_STORAGE } from "../actions/storage";
import _ from "lodash";

const storage = (state, action) => {
  switch (action.type) {
    case SAVE_STORAGE:
      return state.setIn(["storage", "list"], fromJS(action.data));
    default:
      return state;
  }
};

export default storage;
