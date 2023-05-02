import fetch from 'node-fetch';
import { getUsers } from './user/utils';
import { makeUserDataLoader } from './user/dataloaders';
import { getPosts } from './posts/utils';
import { makePostDataLoader } from './posts/dataloaders';

export const context = () => {
  return {
    userDataLoader: makeUserDataLoader(getUsers(fetch)),
    postDataLoader: makePostDataLoader(getPosts(fetch)),
    getUsers: getUsers(fetch),
    getPosts: getPosts(fetch),
  };
};
