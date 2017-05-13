import { CLEAR_STATE, UPDATE_ORDER, RECEIVE_USER_ORDERS, RECEIVE_ORDERS, RECEIVE_ORDER, RECEIVE_ERRORS, REMOVE_ORDER } from '../actions/order_actions';
import merge from 'lodash/merge';

const defaultState = {
  orders: [],
  currentOrder: {},
  errors: []
};

export const OrderReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case CLEAR_STATE:
      return merge(({}, defaultState));
    case RECEIVE_ORDERS:
      return merge({}, state, {currentOrder: action.orders});
    case REMOVE_ORDER:
      let newState = merge({}, state);
      let tempOrder = newState.currentOrder.filter( (order) => {
          return order._id !== action.order._id;
      });
      newState.currentOrder = tempOrder;
      return newState;
    case UPDATE_ORDER:
      let upState = merge({}, state);
      let tempUpdate = upState.currentOrder.filter( (order) => {
          return order._id !== action.order._id;
      });
      tempUpdate.push(action.order);
      upState.currentOrder = tempUpdate;
      return upState;
    case RECEIVE_ORDER:
      let tempOrders = [];
      tempOrders = tempOrders.concat(state.currentOrder);
      tempOrders.push(action.order);
      return merge({}, state, {orders: tempOrders}, {currentOrder: tempOrders});
    case RECEIVE_USER_ORDERS:
      return merge({}, state, {orders: tempOrders}, {currentOrder: action.order});
    case RECEIVE_ERRORS:
      return merge({}, state, {errors: action.errors});
    default:
      return state;
  }
};
