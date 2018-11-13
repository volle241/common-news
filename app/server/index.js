import http from 'http';

import * as config from 'common/config';

import app from './server';

const server = http.createServer(app);
let currentApp = app;

server.listen(config.PORT, (error) => {
  if (error) {
    console.error(error);
    return;
  }

  console.log(`Listening at http://localhost:${config.PORT}`);
});

if (module.hot) {
  module.hot.accept('./server', () => {
    server.removeListener('request', currentApp);
    server.on('request', app);
    currentApp = app;
  });
}
