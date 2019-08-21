import { createStore, applyMiddleware, compose } from 'redux';
// import { routerMiddleware } from 'react-router-redux';
import { routerMiddleware } from 'connected-react-router';
import { apiMiddleware } from 'redux-api-middleware';
import thunkMiddleware from 'redux-thunk';

import createRootReducers from 'common/reducers';

export const configureStore = ({ history, cookies }, initialState = {}) => {
  const composeEnhancers = (window || {}).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    createRootReducers(history),
    initialState,
    composeEnhancers(applyMiddleware(
      routerMiddleware(history),
      apiMiddleware,
      thunkMiddleware.withExtraArgument({ cookies }),
    )),
  );

  if (module.hot) {
    module.hot.accept('common/reducers', () => {
      // store.replaceReducer(require('common/reducers').default(history)); // eslint-disable-line
      store.replaceReducer(createRootReducers(history));
    });
  }

  return store;
};
