import { gql } from 'apollo-server';

export const apiFiltersTypeDefs = gql`
  input ApiFiltersInput {
    _sort: String
    _order: ApiFilterOrder
    _start: String
    _limit: String
  }
  enum ApiFilterOrder {
    ASC
    DESC
  }
`;
