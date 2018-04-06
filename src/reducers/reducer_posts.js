import { FETCH_POSTS } from '../actions';
import _ from 'lodash';

export default function (state = {}, action) {
    switch(action.type) {
        case FETCH_POSTS:
        // Payload is received as Array and needs to be converted to an Object
        // With key as posts ID and post as the value
        return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}