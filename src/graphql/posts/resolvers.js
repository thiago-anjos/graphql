const posts = async (_, { input }, { getPosts }) => {
  const apiFiltersInput = new URLSearchParams(input);
  const response = await getPosts('/?' + apiFiltersInput);
  const posts = response.json();
  return posts;
};

const post = async (_, { id }, { getPosts }) => {
  const response = await getPosts('/' + id);
  const post = await response.json();

  if (typeof post.id === 'undefined') {
    return {
      statusCode: 404,
      message: 'Post not Found',
    };
  }

  return post;
};

const user = async ({ userId }, _, { userDataLoader }) => {
  return userDataLoader.load(userId);
};

export const postResolver = {
  Query: {
    post,
    posts,
  },
  Post: { user },
};
