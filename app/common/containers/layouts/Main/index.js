import React from 'react';
import PropTypes from 'prop-types';
import bem from 'cn-decorator';

import Header from 'common/components/Header';

import './index.scss';

@bem('main-layout')
export default class MainLayout extends React.Component {
  static displayName = 'MainLayout';

  static propTypes = {
    children: PropTypes.any.isRequired,
  };

  render(bem) {
    const { children } = this.props;

    return (
      <section className={bem()}>
        <Header />

        <main className={bem('main')}>
          {children}
        </main>
      </section>
    );
  }
}
