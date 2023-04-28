import { gql } from 'apollo-server';
import { userTypeDefs } from './user/typedefs';
import { userResolvers } from './user/resolvers';
import { postTypeDefs } from './posts/typedefs';
import { postResolver } from './posts/resolvers';
import { apiFiltersTypeDefs } from './api-filters/typedefs';

const rootTypeDefs = gql`
  type Query {
    hi: String
  }
`;

const rootResolvers = {
  Query: {
    hi: () => {
      return 'oi';
    },
  },
};

export const typeDefs = [
  rootTypeDefs,
  userTypeDefs,
  postTypeDefs,
  apiFiltersTypeDefs,
];
export const resolvers = [rootResolvers, userResolvers, postResolver];
