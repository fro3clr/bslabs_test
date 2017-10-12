export const ADD_COMMENT = "ADD_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const addComment = (postId, commentData) => ({
  type: ADD_COMMENT,
  postId,
  commentData
});

export const removeComment = (postId, commentId) => ({
  type: REMOVE_COMMENT,
  postId,
  commentId
});
