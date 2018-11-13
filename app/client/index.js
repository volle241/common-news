import React from 'react';
import ReactDOM from 'react-dom';
import App from 'common/app';

const render = Component => {
  ReactDOM.hydrate(
    <Component />,
    document.getElementById('root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('common/app', () => {
    const Next = require('common/app').default;
    render(Next);
  });
}
