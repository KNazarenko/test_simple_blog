import { GET_POSTS, GET_POST, GET_COMMENTS } from './type';
import axios from 'axios';

/**
 |--------------------------------------------------
 | Get data
 |--------------------------------------------------
 */

// Get tasks
export const getPosts = () => async dispatch => {
  const res = await axios.get('http://localhost:3001/posts/');

  dispatch({
    type: GET_POSTS,
    payload: res.data
  });
};

export const getPost = id => async dispatch => {
  const res = await axios.get(`http://localhost:3001/posts/${id}`);
  dispatch({
    type: GET_POST,
    payload: res.data
  });
};

export const getComments = id => async dispatch => {
  const res = await axios.get(`http://localhost:3001/comments/`);

  dispatch({
    type: GET_COMMENTS,
    payload: res.data
  });
};

/**
|--------------------------------------------------
| Add
|--------------------------------------------------
*/

/**
|--------------------------------------------------
| Delete
|--------------------------------------------------
*/

/**
|--------------------------------------------------
| Edit
|--------------------------------------------------
*/
