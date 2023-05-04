const users = async (_, { input }, context) => {
  const apiFiltersInput = new URLSearchParams(input);
  const users = await context.getUsers('/?' + apiFiltersInput);
  return users.json();
};

const user = async (_, { id }, { getUsers }) => {
  const response = await getUsers('/' + id);
  const user = await response.json();
  return user;
};

const posts = async ({ id }, _, { dataSources }) => {
  return dataSources.postApi.dataLoader.load(id);
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
  User: { posts },
};
