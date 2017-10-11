export const ADD_COMMENT  = "ADD_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export const addComment = (postId, commentData) => {
  return {
    type: ADD_COMMENT,
    postId,
    commentData
  }
}

export const removeComment = (postId, commentId) => {
  return {
    type: REMOVE_COMMENT,
    postId,
    commentId
  };
}
