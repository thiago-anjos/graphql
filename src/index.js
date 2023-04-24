import { ApolloServer, gql } from 'apollo-server';

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      hello: String
      hi: String
      id: ID
      married: Boolean!
      cars: [String]
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
      id: () => {
        return 1;
      },
      married: () => {
        return true;
      },
      cars: () => {
        return ['ford', 'honda'];
      },
    },
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listenning on url ${url}`);
});
