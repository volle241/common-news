import { handleActions, createAction } from 'redux-actions';

import APIFetch from 'common/redux/api';
import { NEWS_API_DOMAIN, NEWS_API_KEY } from 'common/config';
import {
  parsePublishDay,
  formatDescription,
  getUniqueId,
} from 'common/helpers';

export const NAMESPACE = '@news';

export const setNews = createAction(`${NAMESPACE}/SET_NEWS`);

export const loadNews = () => async (dispatch) => {
  const result = await dispatch(fetchNews());

  if (result.error) {
    throw new Error();
  }

  await dispatch(setNews(result.payload));
};

export const fetchNews = () => APIFetch({
  endpoint: '/api/news',
  method: 'GET',
  type: `${NAMESPACE}/FETCH_NEWS`,
  params: {
    domains: NEWS_API_DOMAIN,
    apiKey: NEWS_API_KEY,
  },
});

export default handleActions({
  [setNews]: (state, { payload }) => ({
    ...state,
    list: payload.articles.map(article => ({
      id: getUniqueId(),
      url: article.url,
      urlToImage: article.urlToImage,
      title: article.title,
      link: article.url,
      description: formatDescription(article.description),
      published: parsePublishDay(article.publishedAt),
    })),
  })
}, {
  list: Array(6)
    .fill({})
    .map(() => ({ id: getUniqueId() })),
});
