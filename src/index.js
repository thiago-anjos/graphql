import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      user: User!
      users: [User!]
    }
    type User {
      id: ID!
      userName: String!
      age: Int
    }
  `,
  resolvers: {
    Query: {
      user: () => {
        return {
          id: '798798798',
          userName: 'Thiago',
          age: 30,
        };
      },
      users: () => {
        return [
          {
            id: '798798798',
            userName: 'Thiago',
            age: 30,
          },
          {
            id: '798798798',
            userName: 'Lucas',
            age: 29,
          },
        ];
      },
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listenning on url ${url}`);
});
