import { gql } from 'apollo-server';

export const postTypeDefs = gql`
  extend type Query {
    post(id: ID): PostResult!
    posts(input: ApiFiltersInput): [Post!]!
  }

  union PostResult = PostNotFound | Post

  type PostNotFound {
    statusCode: Int!
    message: String!
  }
  type Post {
    id: ID!
    title: String
    body: String
    userId: String
    indexRef: Int
    createdAt: String
    unixTimeStampExample: String
  }
`;
