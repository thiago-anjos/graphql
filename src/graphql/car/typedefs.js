import { gql } from 'apollo-server';

export const carTypeDefs = gql`
  extend type Query {
    car: [Car!]!
  }
  type Car {
    make: String
    value: Float
    new: Boolean
    fanciable: Boolean
  }
`;
