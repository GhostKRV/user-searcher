export const convertSearchToNameArray = (searchData: any[]): string[] => {
  return searchData.map((user) => user.login);
};
