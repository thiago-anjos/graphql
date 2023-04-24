const user = () => {
  return {
    id: '879798798',
    userName: 'Thiago',
  };
};

const users = () => {
  return [
    {
      id: '879798798',
      userName: 'Lucas',
    },
    {
      id: '879798798',
      userName: 'Felipe',
    },
    {
      id: '879798798',
      userName: 'Miguel',
    },
  ];
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};
