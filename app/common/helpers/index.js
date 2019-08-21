import moment from 'moment';

const AVAILABLE_DESCRIPTION_LENGTH = 176;

export const getUniqueId = () => Math.random().toString(32).slice(-10);

export const parsePublishDay = date => moment(date).format('LL');

export const formatDescription = value => `${(value || '')
  .substr(0, AVAILABLE_DESCRIPTION_LENGTH).trim()}...`;
