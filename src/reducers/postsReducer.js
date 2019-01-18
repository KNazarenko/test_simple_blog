import { GET_POSTS, GET_POST, GET_COMMENTS } from '../actions/type';

const initialState = {
  // All posts
  items: [],
  // Current post
  post: {},
  // Current post comments
  comments: []
};

/**
|--------------------------------------------------
| 
|--------------------------------------------------
*/

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        items: action.payload
      };
    case GET_POST:
      return {
        ...state,
        post: action.payload
      };
    case GET_COMMENTS:
      return {
        ...state,
        comments: action.payload
      };
    default:
      return state;
  }
}
