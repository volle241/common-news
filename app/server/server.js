import React from 'react';
import { readFileSync } from 'fs';
import path from 'path';
import { renderToString } from 'react-dom/server';
import express from 'express';
import { Helmet } from 'react-helmet';

import * as config from 'common/config';

import App from 'common/app';

import template from './template';

const app = express();

const resources = {
  scripts: ['http://localhost:6001/client.js'],
  styles: ['http://localhost:6001/client.css'],
};

app.get('*', (request, response) => {
  const html = renderToString((<App />));

  const helmet = Helmet.renderStatic();

  response.send(template(
    html,
    resources,
    helmet
  ));
});

export default app;
