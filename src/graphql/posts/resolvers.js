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
};
