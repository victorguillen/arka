import React from 'react';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';

class Forms extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      order: {
        "description": "",
        "st1": "",
        "st2": "",
        "city": "",
        "state": "",
        "zip": "",
        "country": "",
        "quantity": 1,
        "unitPrice": 7.83,
        "subTotal": 0,
        "shippingService": "FedEx Ground",
        "shippingPrice": 14,
        "total": 0,
        "tax": 0,
        "status": "order-placed",
        "mfgName": "",
        "userId": this.props.userId
      }
    };

    this.handleOrderSubmit = this.handleOrderSubmit.bind(this);
  }

  handleOrderSubmit(e) {
    e.preventDefault();

    this.props.createOrder(this.state.order);

  }

  updateOrder(field) {
    return ( (e) => {
        let newState = this.state.order;
        newState[field] = e.currentTarget.value;
        this.setState( {order: newState} );
      }
    );
	}

  updateQuantity() {
    return ( (e) => {
      let newState = this.state.order;
      let quantity = parseInt(e.currentTarget.value);
      let tax = 0.0975;
      let unitPrice = 0;

      newState["quantity"] = quantity;
      switch(true) {
        case (quantity < 51):
            unitPrice = 7.83;
            break;
        case (quantity > 50 && quantity < 151):
            unitPrice = 4.18;
            break;
        case (quantity > 151 && quantity < 301):
            unitPrice = 2.86;
            break;
        case (quantity > 300 && quantity < 501):
            unitPrice = 2.22;
            break;
        case (quantity > 500 && quantity < 1001):
            unitPrice = 1.57;
            break;
        default:
          break;
      }
      newState["unitPrice"] = unitPrice;
      let subTotal = unitPrice * quantity;
      newState["subTotal"] = subTotal.toFixed(2);
      let tempTax = subTotal * tax;
      newState["tax"] = tempTax.toFixed(2)
      newState["total"] = (subTotal + tempTax + parseInt(newState["shippingPrice"])).toFixed(2);
      this.setState( {order: newState} );
    });
	}

  updateShipping() {
    return ( (e) => {
      let newState = this.state.order;
      newState["shippingService"] = e.currentTarget.value;
      switch(e.currentTarget.value) {
        case "FedEx Ground":
            newState["shippingPrice"] = 14;
            break;
        case "FedEx Retail":
            newState["shippingPrice"] = 17;
            break;
        case "FedEx Express":
            newState["shippingPrice"] = 24;
            break;
        case "FedEx Freight":
            newState["shippingPrice"] = 35;
            break;
        default:
            break;
      }
      newState["total"] = (
        parseInt(newState["subTotal"]) +
        parseInt(newState["tax"]) +
        parseInt(newState["shippingPrice"])
      );
      this.setState( {order: newState} );
    });
	}

  render() {
    let orders = this.props.orders.map( order =>
      [order.name, order._id]
    );
    return (
      <div className='forms-container'>
        <div className='outer-form-container'>
          <div className='form-title'>Create New Order</div>
          <div className='inner-form-container'>
            <form onSubmit={this.handleOrderSubmit} className="form-container">
              <div className='input-title'>Description:</div>
              <input type="text"
                onChange={this.updateOrder("description")}
                className='input'
                placeholder="Description"
                maxLength="40"
                />
              <div className='input-title'>Address:</div>
              <input type="text"
                onChange={this.updateOrder("st1")}
                className='input'
                placeholder="Street 1"
                />
              <input type="text"
                onChange={this.updateOrder("st2")}
                className='input'
                placeholder="Street 2"
                />
              <div>
                <input type="text"
                  onChange={this.updateOrder("city")}
                  className='input-2'
                  placeholder="City"
                  />
                <input type="text"
                  onChange={this.updateOrder("state")}
                  className='input-3'
                  placeholder="State"
                  />
              </div>
              <div>
                <input type="text"
                  onChange={this.updateOrder("zip")}
                  className='input-4'
                  placeholder="Zipcode"
                  />
                <input type="text"
                  onChange={this.updateOrder("country")}
                  className='input-4'
                  placeholder="Country"
                  />
              </div>
              <div className='quantity'>
                <div className='quantity-title'>
                  Quantity: {this.state.order.quantity}
                </div>
                <div className='quantity-title'>
                  Unit Price: {this.state.order.unitPrice}
                </div>
              </div>
              <br/>
              <input type="range"
                name="points"
                min="1"
                max="1000"
                onChange={this.updateQuantity()}
                />
              <div className='input-title'>Shipping:</div>
              <div className="quantity">
                <select
                  name="shipping"
                  onChange={this.updateShipping()}
                  className='dropdown'
                  defaultValue="FedEx Ground"
                  >
                  <option value="FedEx Ground">FedEx Ground</option>
                  <option value="FedEx Retail">FedEx Retail</option>
                  <option value="FedEx Express">FedEx Express</option>
                  <option value="FedEx Freight">FedEx Freight</option>
                </select>
                <input type="submit" value="Confirm" className='form-button'/>
              </div>
            </form>
          </div>
        </div>
        <div className='outer-form-container'>
          <div className='form-title'>Order Detail</div>
          <div className='inner-form-container'>
            <div className="form-container">
              <div className="order-detail-container">
                <div className="order-detail-columns-left">
                  <div className='input-title'>
                    Subtotal:
                  </div>
                  <div className='input-title'>
                    Tax:
                  </div>
                  <div className='input-title'>
                    Shipping:
                  </div>
                  <div className='total'>
                    Total:
                  </div>
                </div>
                <div className="order-detail-columns-right">
                  <div className='input-title'>
                    ${this.state.order.subTotal}
                  </div>
                  <div className='input-title'>
                    ${this.state.order.tax}
                  </div>
                  <div className='input-title'>
                    ${this.state.order.shippingPrice}
                  </div>
                  <div className='total'>
                    ${this.state.order.total}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Forms;
