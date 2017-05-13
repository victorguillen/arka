import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

class LoginForm extends React.Component {
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

  componentDidMount() {
    this.props.resetState();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createSession(this.state.user)
      .then( () => this.route());
  }

  route() {
    if (this.props.user.admin) {
      hashHistory.push(
        `/admin`
      );
    } else {
      hashHistory.push(
        `/users/${this.props.user._id}`
      );
    }
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
          <div className='session-form-title'>Login to Arka</div>
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
              <input type="submit" value="Login" className='save-button'/>
            </form>
          </div>
        </div>
        <div className="bottom-session-container">
          <div>
            Don't have an account?
            <Link to="/signup" className="link-session">Sign up</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
