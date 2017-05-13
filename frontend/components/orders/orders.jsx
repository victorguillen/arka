import React from 'react';
import { Link, Router, hashHistory, Route, IndexRoute } from 'react-router';
import Forms from '../forms/forms_container';

class Orders extends React.Component {
  constructor(props) {
    super(props);
    this.updateOrderStatus = this.updateOrderStatus.bind(this);
    this.updateOrderMan = this.updateOrderMan.bind(this);
    this.admin = this.admin.bind(this);
  }

  componentDidMount() {
		this.props.fetchOrder(this.props.routeParams._id);
	}

  updateOrderStatus(order) {
    if (order.status === "order-placed") {
      order.status = "order-processed";
      this.props.updateOrder(order);
    } else {
      order.status = "order-placed";
      this.props.updateOrder(order);
    }
  }

  updateOrderMan(order, e) {
    if (e.currentTarget.value !== "") {
      order.mfgName = e.currentTarget.value;
      this.props.updateOrder(order);
    }
  }

  admin() {
    if(this.props.user) {

    }
  }

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
                  <div className="status-container-checkbox">
                    <div>
                      <div className='order-info-title'>Change Status:</div>
                    </div>
                      <input  type="checkbox" value="" onChange={() => this.updateOrderStatus(order)}/>
                  </div>
                </div>
                <div className="manufacturer">
                  <div>
                    <div className='order-info-title-m'>Manufacturer: {order.mfgName}</div>
                  </div>
                  <div className="select-box">
                    <select onChange={(e) => this.updateOrderMan(order, e)}>
                      <option value="Brookfield Box">Brookfield Box</option>
                      <option value="Pratt Industries">Pratt Industries</option>
                      <option value="California Box">California Box</option>
                      <option value="Shillington Box">Shillington Box</option>
                    </select>
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
