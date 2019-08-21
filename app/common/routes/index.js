import React from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router';

import LayoutRoute from 'common/components/LayoutRoute';
import NewsPage from 'common/containers/pages/News';
import MainLayout from 'common/containers/layouts/Main';

@withRouter
export default class AppRoutes extends React.Component {
  render() {
    return (
      <Switch>
        <LayoutRoute path="/" component={MainLayout}>
          <Route exact path="/news" component={NewsPage} />

          <Redirect to="/news" component={NewsPage} />
        </LayoutRoute>
      </Switch>
    );
  }
}
