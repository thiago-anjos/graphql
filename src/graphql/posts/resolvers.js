const posts = async (_, __, { getPosts }) => {
  const response = await getPosts();
  const posts = response.json();
  return posts;
};

const post = async (_, { id }, { getPosts }) => {
  const response = await getPosts('/' + id);
  const post = await response.json();
  return post;
};

export const postResolver = {
  Query: {
    post,
    posts,
  },
  Post: {
    unixTimeStampExample: ({ createdAt, id }) => {
      const timeStamp = new Date(createdAt).getTime() / 1000; // divide por 1000 para pegar o valor em segundos, já que o gettime é em milisegundos
      console.log(`Fui chamado para o post ${id}`);
      return Math.floor(timeStamp);
    },
  },
};
