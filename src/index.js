import { ApolloServer } from 'apollo-server';
import { resolvers, typeDefs } from './graphql/schema';
import { context } from './graphql/context';
import { PostsApi } from './graphql/posts/dataSources';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  dataSources: () => {
    return {
      postApi: new PostsApi(),
    };
  },
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listenning on url ${url}`);
});
