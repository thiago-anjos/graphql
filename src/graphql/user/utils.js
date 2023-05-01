import { API_URL } from '../constants';

export const getUsers =
  (fetch) =>
  (path = '/') => {
    return fetch(API_URL + '/users' + path);
  };
