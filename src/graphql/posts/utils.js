import { API_URL } from '../constants';

export const getPosts =
  (fetch) =>
  (path = '/') => {
    const url = API_URL + '/posts' + path;
    return fetch(url);
  };
