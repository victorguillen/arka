import * as ApiUtil from '../utils/orders_util';

export const RECEIVE_ORDERS = 'RECEIVE_ORDERS';
export const RECEIVE_ORDER = 'RECEIVE_ORDER';
export const RECEIVE_USER_ORDERS = 'RECEIVE_USER_ORDER';
export const REMOVE_ORDER = 'REMOVE_ORDER';
export const UPDATE_ORDER = 'UPDATE_ORDER';
export const CLEAR_STATE = 'CLEAR_STATE';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveOrders = (orders) => ({
  type: RECEIVE_ORDERS,
  orders
});

export const receiveOrder = (order) => ({
  type: RECEIVE_ORDER,
  order
});

export const upOrder = (order) => ({
  type: UPDATE_ORDER,
  order
});

export const receiveUserOrders = (order) => ({
  type: RECEIVE_USER_ORDERS,
  order
});

export const deleteOrder = (order) => ({
  type: REMOVE_ORDER,
  order
});

export const clearState = () => ({
  type: CLEAR_STATE,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const fetchOrders = () => dispatch => (
  ApiUtil.fetchOrders().then( orders => dispatch(receiveOrders(orders)),
    errors => dispatch(receiveErrors(errors))
  )
);

export const fetchOrder = (orderId) => dispatch => (
  ApiUtil.fetchOrder(orderId).then( order => dispatch(receiveUserOrders(order)),
    errors => dispatch(receiveErrors(errors))
  )
);

export const updateOrder = (order) => dispatch => (
  ApiUtil.updateOrder(order).then( order => dispatch(upOrder(order)),
    errors => dispatch(receiveErrors(errors))
  )
);

export const createOrder = (orderInfo) => dispatch => (
  ApiUtil.createOrder(orderInfo).then( order => dispatch(receiveOrder(order)),
    errors => dispatch(receiveErrors(errors))
  )
);

export const removeOrder = (orderId) => dispatch => (
  ApiUtil.removeOrder(orderId).then( order => dispatch(deleteOrder(order)),
    errors => dispatch(receiveErrors(errors))
  )
);

export const resetState = () => dispatch => (
  ApiUtil.fetchOrders().then( () => dispatch(clearState()),
    errors => dispatch(receiveErrors(errors))
  )
);
