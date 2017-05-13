import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import Orders from './orders/orders_container';
import Admin from './orders/admin_container';
import LoginForm from './forms/login_form_container';
import SignupForm from './forms/signup_form_container';

const Root = ({store}) => {
  return(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={LoginForm} />
          <Route path='/login' component={LoginForm} />
          <Route path='/signup' component={SignupForm} />
          <Route path='/users/:_id' component={Orders} />
          <Route path='/admin' component={Admin} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
