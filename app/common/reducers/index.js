import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';
import { connectRouter } from 'connected-react-router';

import news, { NAMESPACE as NEWS } from 'common/redux/news';

export default history => combineReducers({
  router: connectRouter(history),
  [NEWS]: news,
});
