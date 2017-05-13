import { connect } from 'react-redux';
import { fetchOrder, fetchOrders, removeOrder, updateOrder } from '../../actions/order_actions';
import { fetchUser } from '../../actions/user_actions';
import Admin from './admin';

const mapStateToProps = ( state ) => ({
  orders: state.orders.currentOrder,
  user: state.user.user
});

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    fetchOrder: (id) => dispatch(fetchOrder(id)),
    fetchOrders: () => dispatch(fetchOrders()),
    fetchUser: (id) => dispatch(fetchUser(id)),
    removeOrder: (id) => dispatch(removeOrder(id)),
    updateOrder: (orderInfo, id) => dispatch(updateOrder(orderInfo, id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
