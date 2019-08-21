import React from 'react';
import { Route, Switch, withRouter } from 'react-router';

@withRouter
export default class LayoutRoute extends React.PureComponent {
  render() {
    const { children, component: Layout, ...routeProps } = this.props;

    return (
      <Route
        {...routeProps}
        component={() => (
          <Layout {...routeProps}>
            <Switch>{children}</Switch>
          </Layout>
        )}
      />
    );
  }
}
