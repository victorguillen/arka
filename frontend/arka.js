import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import * as Util from './utils/orders_util'

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.removeOrder = Util.removeOrder;
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
