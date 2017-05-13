import { combineReducers } from 'redux';
import { OrderReducer } from './order_reducer';
import { UserReducer } from './user_reducer';

const RootReducer = combineReducers({
  orders: OrderReducer,
  user: UserReducer
});

export default RootReducer;
