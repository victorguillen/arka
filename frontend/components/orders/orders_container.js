import { connect } from 'react-redux';
import { fetchOrder, removeOrder, updateOrder, resetState } from '../../actions/order_actions';
import { fetchUser } from '../../actions/user_actions';
import Orders from './orders';

const mapStateToProps = ( state ) => ({
  orders: state.orders.currentOrder,
  user: state.user.user
});

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    fetchOrder: (id) => dispatch(fetchOrder(id)),
    fetchUser: (id) => dispatch(fetchUser(id)),
    removeOrder: (id) => dispatch(removeOrder(id)),
    updateOrder: (orderInfo, id) => dispatch(updateOrder(orderInfo, id)),
    resetState: () => dispatch(resetState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
