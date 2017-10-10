import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";
import { fromJS } from "immutable";
import { composeWithDevTools } from "redux-devtools-extension";

const INITIAL_STATE = fromJS({});

const configureStore = () =>
  createStore(rootReducer, INITIAL_STATE, composeWithDevTools(applyMiddleware(thunk)));

export default configureStore;
