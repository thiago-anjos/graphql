import fetch from 'node-fetch';

export const context = () => {
  return {
    getUsers: (path = '/') => {
      const url = 'http://localhost:3000/users' + path;
      return fetch(url);
    },
    getPosts: (path = '/') => {
      const url = 'http://localhost:3000/posts' + path;
      return fetch(url);
    },
  };
};
