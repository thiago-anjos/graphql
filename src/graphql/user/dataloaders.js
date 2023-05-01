import DataLoader from 'dataloader';

export const makeUserDataLoader = (getUsers) => {
  return new DataLoader(async (ids) => {
    const urlQuery = ids.join('&id=');
    const response = await getUsers('?id=' + urlQuery);
    const users = await response.json();
    const resolvedUsers = ids.map((id) => users.find((user) => user.id === id));
    console.log(resolvedUsers);
    return resolvedUsers;
  });
};
