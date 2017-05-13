import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        "name": "",
        "password": "",
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createUser(this.state.user)
      .then( () => this.route());
  }

  route() {

    hashHistory.push(
      `/users/${this.props.user._id}`
    );
  }

  updateOrder(field) {
    return ( (e) => {
        let newState = this.state.user;
        newState[field] = e.currentTarget.value;
        this.setState( {user: newState} );
      }
    );
	}

  render() {
    return (
        <div className='session-form-container'>
          <div className='session-outer-form-container'>
            <div className='session-form-title'>Signup with Arka</div>
            <div className='session-inner-form-container'>
              <form onSubmit={this.handleSubmit} className="form-container">
                <div className='input-title'>Email:</div>
                <input type="text"
                  onChange={this.updateOrder("name")}
                  className='input'
                  />
                <div className='input-title'>Password:</div>
                <input type="text"
                  onChange={this.updateOrder("password")}
                  className='input'
                  />
                <br/>
                <input type="submit" value="Signup" className='save-button'/>
              </form>
            </div>
          </div>
          <div className="bottom-session-container">
            <div>
              Have an account?
              <Link to="/login" className="link-session">Login</Link>
            </div>
          </div>
        </div>
    );
  }
}

export default SignupForm;
