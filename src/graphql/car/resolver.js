const car = () => {
  return [
    {
      make: 'Ford',
      value: 49.5,
      new: true,
      fanciable: false,
    },
    {
      make: 'Fiat',
      value: 49.5,
      new: false,
      fanciable: false,
    },
  ];
};

export const carResolver = {
  Query: {
    car,
  },
};
