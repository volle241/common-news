import React from 'react';
import bem from 'cn-decorator';

import './index.scss';

@bem('main-header-component')
export default class HeaderComponent extends React.PureComponent {
  static displayName = 'HeaderComponent';

  render(bem) {
    return (
      <header className={bem()} />
    );
  }
}
