export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  };
}
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  };
}
export function deleteComment(postId, i) {
  return {
    type: 'DELETE_COMMENT',
    postId,
    i
  };
}
