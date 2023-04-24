import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      hello: String
      hi: String
    }
  `,
  resolvers: {
    Query: {
      hello: () => {
        return 'Thiago';
      },
      hi: () => {
        return 'olá amigo';
      },
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listenning on url ${url}`);
});
