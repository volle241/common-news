import { RSAA } from 'redux-api-middleware';

export default ({ type, ...config }) => (dispatch) => {
  const result = { ...config };
  const isFormDataBody = (result.body instanceof FormData);
  const isBodyAnObject = (result.body && typeof result.body !== 'string');

  if (type !== undefined) {
    result.types = [
      `${type}_REQUEST`,
      `${type}_SUCCESS`,
      `${type}_FAILURE`,
    ];
  }

  if (result.params) {
    const serializedData = Object.entries(result.params)
      .reduce((target, [key, value]) => ([
        ...target,
        `${key}=${encodeURIComponent(value)}`,
      ]), [])
      .join('&');

    result.endpoint = `${result.endpoint}?${serializedData}`;
    delete result.params;
  }

  if (isBodyAnObject && !isFormDataBody) {
    result.body = JSON.stringify(result.body);
  }

  result.headers = {
    ...result.headers,
    ...(!isFormDataBody ? { 'content-type': 'application/json' } : {}),
  };

  return dispatch({
    [RSAA]: {
      ...result,
      credentials: 'include',
    },
  });
};
