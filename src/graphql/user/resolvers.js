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

export const userResolvers = {
  Query: {
    user,
    users,
  },
};

// query get_users {
//   users(input:{_sort: "userName"}) {
//     userName
//   }
// }
