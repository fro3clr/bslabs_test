import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";
import { fromJS } from "immutable";

const INITIAL_STATE = fromJS({});

const configureStore = () =>
  createStore(rootReducer, INITIAL_STATE, applyMiddleware(thunk));

export default configureStore;
