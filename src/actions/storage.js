import { List } from "immutable";

export const SAVE_POST = 'SAVE_POST';
export const UNSAVE_POST = 'UNSAVE_POST';
export const READ_FROM_STORAGE = 'READ_FROM_STORAGE';
export const SAVE_TO_STORAGE = 'SAVE_TO_STORAGE';

// should be invokes on app initialization
export const readFromStorage = () => (dispatch) => {
  let savedPosts = JSON.parse(localStorage.getItem('savedPosts')) || List();

  dispatch({
    type: READ_FROM_STORAGE,
    savedPosts
})};

// helper action creator, shouldn't invokes from components
const saveToStorage = () => (dispatch, getState) => {
  const state = getState();
  const savedPosts = state.getIn(["savedPosts", "list"]);
  dispatch({
    type: SAVE_TO_STORAGE,
    savedPosts
  });
  localStorage.setItem('savedPosts', JSON.stringify(savedPosts));
};

// dispatch this ac from component
export const savePost = (post) => dispatch => {
  dispatch({
    type: SAVE_POST,
    post
  });
  dispatch(saveToStorage());
};

// invoke ac from component
export const unsavePost = (post) => dispatch => {
  dispatch({
    type: UNSAVE_POST,
    post
  });
  dispatch(saveToStorage());
};