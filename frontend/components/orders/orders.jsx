import React from 'react';
import { Link, Router, hashHistory, Route, IndexRoute } from 'react-router';
import Forms from '../forms/forms_container';

class Orders extends React.Component {
  constructor(props) {
    super(props);
  }

  // fetch all user orders when they land at their page
  componentDidMount() {
		this.props.fetchOrder(this.props.routeParams._id);
	}

  // this function renders every order individually
  orderDetail() {
    if(this.props.orders.length > 0) {
      return (
        <div className='outer-orders-detail-container'>
          { this.props.orders.map( (order, index) =>
            <div className='order-info-detail-container' key={index}>
              <div className='order-name-container'>
                <p>{order.description}</p>
              </div>
              <div className='order-info-container'>
                <div className="order-detail-address">
                  <div>
                    <div className='order-info-title'>Address:</div>
                    <div className='order-info'>{order.st1}</div>
                    <div className='order-info'>{order.st2}</div>
                    <div className='order-info'>{order.city}, {order.state} {order.zip}</div>
                    <div className='order-info'>{order.country}</div>
                  </div>
                  <div>
                    <div className='order-info-title'>Quantity & Unit Price:</div>
                    <div className='order-info'>{order.quantity} units at ${order.unitPrice}</div>
                    <div className='order-info-title'>Shipping / Cost:</div>
                    <div className='order-info'>{order.shippingService} - ${order.shippingPrice}</div>
                  </div>
                </div>
                <div className="order-detail-total-container">
                  <div className='price-breakdown-title'>Price Break Down</div>
                  <div className="order-detail-address">
                    <div className="order-detail-total-column-left">
                      <div className='order-info-title'>Subtotal:</div>
                      <div className='order-info-title'>Tax:</div>
                      <div className='order-info-title'>Total:</div>
                    </div>
                    <div className="order-detail-total-column-right">
                      <div className='order-info'>${order.subTotal}</div>
                      <div className='order-info'>${order.tax}</div>
                      <div className='order-info'>${order.total}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bottom-order-container'>
                <div className="delete-container">
                  <p className='cursor' onClick={ () => this.props.removeOrder(order._id)}>Delete Order</p>
                </div>
                <div className="status-outer-container">
                  <div className="status-container">
                    <div>
                      <div className='order-info-title'>Status:</div>
                    </div>
                    <div>
                      <div className='order-info'>{order.status}</div>
                    </div>
                  </div>
                </div>
                <div className="manufacturer">
                  <div>
                    <div className='order-info-title-m'>Manufacturer: {order.mfgName}</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    } else {
      return ( <div className='empty-container'></div> );
    }
  }

  // used bootstrap to make the page responsive
  // renders the orders and the form to create an order
  render() {
    return (
        <div className="row">
          <div className="col-sm-9 col-md-8 col-lg-8">
            <div className='orders-container'>
              <div className='orders-title-container'>
                Orders
              </div>
              <div className='orders-detail-container'>
                {this.orderDetail()}
              </div>
            </div>
          </div>
          <div className="col-sm-3 col-md-4 col-lg-4">
            <div className="form-main-container">
              <Forms userId={this.props.routeParams._id} />
            </div>
          </div>
          <Link to="/"  className="signout_button">Sign out</Link>
        </div>
    );
  }
}

export default Orders;
