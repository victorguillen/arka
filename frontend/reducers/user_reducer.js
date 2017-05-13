import { RECEIVE_USER, RECEIVE_ERRORS } from '../actions/user_actions';
import merge from 'lodash/merge';

const defaultState = {
  user: {},
  errors: []
};

export const UserReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      return merge({}, state, {user: action.user});
    case RECEIVE_ERRORS:
      return merge({}, state, {errors: action.errors});
    default:
      return state;
  }
};
