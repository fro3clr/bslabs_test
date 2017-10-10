import config from "../configs/config";
import withQuery from "with-query";
import _ from "lodash";


export const REQUEST_POSTS = "REQUEST_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";

export const requestPosts = () => {
  return {
    type: REQUEST_POSTS
  };
};

export const receivePosts = posts => {
  return {
    type: RECEIVE_POSTS,
    posts
  };
};

export const fetchPosts = keyWord => dispatch => {
  if (keyWord) {
    dispatch(requestPosts());

    fetch(
      withQuery(`https://pixabay.com/api/?`, {
        key: config.apiKey,
        orientation: "vertical",
        q: keyWord
      })
    )
      .then(response => response.json())
      // .then(json => console.log(json.hits));
      .then(json => dispatch(receivePosts(json.hits)));
      // .then(posts => dispatch(receivePosts(posts.hits)));
  }
};
