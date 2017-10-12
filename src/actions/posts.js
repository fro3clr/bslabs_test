import config from "../configs/config";
import withQuery from "with-query";

export const REQUEST_POSTS = "REQUEST_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const REMOVE_POST = "REMOVE_POST";
export const APPROVE_POST = "APPROVE POST";
export const DECLINE_POST = "DECLINE POST";

export const requestPosts = () => ({
  type: REQUEST_POSTS
});

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const removePost = postId => ({
  type: REMOVE_POST,
  postId
});

export const approvePost = postId => ({
  type: APPROVE_POST,
  postId
});

export const declinePost = postId => ({
  type: DECLINE_POST,
  postId
});

export const fetchPosts = keyWord => dispatch => {
  if (keyWord) {
    dispatch(requestPosts());

    fetch(
      withQuery(config.apiUrl, {
        key: config.apiKey,
        orientation: "vertical",
        q: keyWord
      })
    )
      .then(response => response.json())
      .then(json => dispatch(receivePosts(json.hits)));
  }
};
