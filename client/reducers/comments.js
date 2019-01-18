function comments(state = [], action) {
  if (typeof action.postId !== 'undefined') {
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action)
    };
  }
  return state;
}

function postComments(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      const user = action.author.value;
      const text = action.comment.value;
      return [...state, { user, text }];
    case 'DELETE_COMMENT':
      return [...state.slice(0, action.i), ...state.slice(action.i + 1)];
    default:
      return state;
  }
}

export default comments;
