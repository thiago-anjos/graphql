import { gql } from 'apollo-server';
import { userTypeDefs } from './user/typedefs';
import { userResolvers } from './user/resolvers';
import { carTypeDefs } from './car/typedefs';
import { carResolver } from './car/resolver';

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

export const typeDefs = [rootTypeDefs, userTypeDefs, carTypeDefs];
export const resolvers = [rootResolvers, userResolvers, carResolver];
