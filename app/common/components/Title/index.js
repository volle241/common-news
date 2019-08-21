import React from 'react';
import PropTypes from 'prop-types';
import bem from 'cn-decorator';

import './index.scss';

const TYPES = ['h1', 'h2', 'h3', 'h4', 'h5', 'h5', 'h6', 'section'];

@bem('main-title-component')
export default class TitleComponent extends React.PureComponent {
  static displayName = 'TitleComponent';

  static propTypes = {
    type: PropTypes.oneOf(TYPES).isRequired,
  };

  render(bem) {
    const { type, children } = this.props;

    const className = bem({ type });

    const CustomTitle = `${type}`;

    if (TYPES.indexOf(CustomTitle) !== -1) {
      return (
        React.createElement(CustomTitle, { className }, children)
      );
    }

    throw new Error(`Unknown title type '${type}'`);
  }
}
