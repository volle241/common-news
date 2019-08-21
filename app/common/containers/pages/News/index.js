import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import bem from 'cn-decorator';

import Article from 'common/components/Article';
import { loadNews } from 'common/redux/news';
import { selectNews } from 'common/redux/news/selectors';

import './index.scss';

@connect(state => ({
  news: selectNews(state),
}), { loadNews })
@bem('news-page')
export default class NewsPage extends React.PureComponent {
  static displayName = 'NewsPage';

  componentDidMount() {
    this.props.loadNews();
  }

  render(bem) {
    const { news } = this.props;

    return (
      <section className={bem()}>
        {news.map(article => (
          <Article
            key={article.id}
            urlToImage={article.urlToImage}
            title={article.title}
            published={article.published}
            description={article.description}
            link={article.link}
          />
        ))}
      </section>
    );
  }
}
