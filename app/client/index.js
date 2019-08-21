import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
// import { ConnectedRouter } from 'react-router-redux';
import { ConnectedRouter } from 'connected-react-router';

import App from 'common/app';
import { configureStore } from 'common/store';

let reduxState = {};

if (window.__REDUX_STATE__) {
  try {
    reduxState = JSON.parse(decodeURIComponent(window.__REDUX_STATE__));
    window.__REDUX_STATE__ = undefined;
  } catch (e) {
  }
}

const history = createBrowserHistory();

const store = configureStore({ history }, reduxState);

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Component />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('common/app', () => {
    const Next = require('common/app').default; //eslint-disable-line
    render(Next);
  });
}
