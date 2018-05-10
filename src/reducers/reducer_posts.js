import { FETCH_POSTS, FECTH_POST, FETCH_POST, DELETE_POST } from '../actions';
import _ from 'lodash';

export default function (state = {}, action) {
    switch(action.type) {
      case DELETE_POST:
        return _.omit(state, action.payload);
      case FETCH_POST:
      // const post = action.payload.data;
      // const newState = { ...state };
      // newState[post.id] = post;
      // return newState;
        return { ...state,  [action.payload.data.id] : action.payload.data };
      case FETCH_POSTS:
        // Payload is received as Array and needs to be converted to an Object
        // With key as posts ID and post as the value
        return _.mapKeys(action.payload.data, 'id');
      default:
        return state;
    }
}