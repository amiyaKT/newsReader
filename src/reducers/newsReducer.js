import { FETCH_NEWS } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_NEWS:
      return action.payload;
    default:
      return state;
  }
}
