import React from 'react';
import { renderToString } from 'react-dom/server';
import express from 'express';
import url from 'url';
import { Helmet } from 'react-helmet';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import cookieParser from 'cookie-parser';
import proxy from 'proxy-middleware';
import 'isomorphic-fetch';
// import { readFileSync } from 'fs';
import path from 'path';

import { configureStore } from 'common/store';
import * as config from 'common/config';
import App from 'common/app';

import template from './template';

const app = express();

const resources = {
  scripts: ['http://localhost:6001/client.js'],
  styles: ['http://localhost:6001/client.css'],
};

app.use(cookieParser());

app.use('/assets', express.static(path.join(__dirname, '../../assets')));

app.use('/api/news', proxy(url.parse(config.NEWS_API_HOST)));

app.get('*', (request, response) => {
  const history = createMemoryHistory();

  history.push(request.url);

  const store = configureStore({
    history,
  });

  const staticContext = {};

  const html = renderToString((
    <Provider store={store}>
      <StaticRouter location={request.url} context={staticContext}>
        <App />
      </StaticRouter>
    </Provider>
  ));

  const helmet = Helmet.renderStatic();

  response.send(template(
    html,
    resources,
    helmet,
    encodeURIComponent(JSON.stringify(store.getState())),
  ));
});

export default app;
