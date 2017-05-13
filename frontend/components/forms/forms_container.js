import { connect } from 'react-redux';
import { fetchOrder, createOrder } from '../../actions/order_actions';
import Forms from './forms';

const mapStateToProps = ( state ) => ({
  orders: state.orders.orders,
  user: state.user.user
});

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    createOrder: orderInfo => dispatch(createOrder(orderInfo)),
    fetchOrder: (_id) => dispatch(fetchOrder(_id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
