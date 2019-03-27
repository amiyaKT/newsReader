import { combineReducers } from 'redux';
import newsReducer from './newsReducer';
import commentReducer from './commentReducer';

export default combineReducers({
  news: newsReducer,
  comments: commentReducer
});
