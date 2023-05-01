import fetch from 'node-fetch';
import { getUsers } from './user/utils';
import { API_URL } from './constants';
import { makeUserDataLoader } from './user/dataloaders';

export const context = () => {
  return {
    userDataLoader: makeUserDataLoader(getUsers(fetch)),
    getUsers: getUsers(fetch),
    getPosts: (path = '/') => {
      const url = API_URL + '/posts' + path;
      return fetch(url);
    },
  };
};
