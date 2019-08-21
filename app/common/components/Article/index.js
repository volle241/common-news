import React from 'react';
import PropTypes from 'prop-types';
import bem from 'cn-decorator';

import Title from 'common/components/Title';

import './index.scss';

@bem('article-component')
export default class ArticleComponent extends React.PureComponent {
  static displayName = 'ArticleComponent';

  static propTypes = {
    urlToImage: PropTypes.string,
    title: PropTypes.string,
    published: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
  };

  static defaultProps = {
    urlToImage: undefined,
    title: undefined,
    published: undefined,
    description: undefined,
    link: undefined,
  };

  state = {
    loadend: false,
  };

  render(bem) {
    const {
      urlToImage, title, published,
      description, link,
    } = this.props;

    const { loadend } = this.state;

    return (
      <article
        className={bem({ initial: !urlToImage })}
      >
        <header className={bem('header')}>
          <img
            alt={title}
            className={bem('image', { loadend })}
            src={urlToImage}
            onLoad={() => {
              this.setState({ loadend: true });
            }}
          />
        </header>

        <section className={bem('content')}>
          <Title type="h4" className={bem('title')}>
            {title}
          </Title>

          <span className={bem('published')}>
            {published}
          </span>

          <p className={bem('paragraph')}>
            <span className={bem('description')}>{description}</span>
            &nbsp;
            <a className={bem('link')} href={link} target="_blank">Read more</a>
          </p>
        </section>
      </article>
    );
  }
}
