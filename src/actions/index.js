import axios from 'axios';
import { FETCH_NEWS, FETCH_COMMENTS } from './types';

export const fetchNews = () => async dispatch => {
  const response = await axios.get(
    'https://hn.algolia.com/api/v1/search_by_date?tags=story'
  );
  dispatch({
    type: FETCH_NEWS,
    payload: response.data.hits
  });
};

export const fetchComments = id => async dispatch => {
  const response = await axios.get(
    `https://hn.algolia.com/api/v1/search?tags=comment,story_${id}`
  );

  dispatch({
    type: FETCH_COMMENTS,
    payload: response.data.hits
  });
};
