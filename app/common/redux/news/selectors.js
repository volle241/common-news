import { createSelector } from 'reselect';

import { NAMESPACE } from './index';

export const news = state => state[NAMESPACE];

export const selectNews = createSelector(
  news,
  ({ list = [] }) => list,
);
