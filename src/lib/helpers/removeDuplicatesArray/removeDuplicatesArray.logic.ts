export const removeDuplicatesArray = (array: string[] | undefined) => {
  return array?.filter((c, index) => {
    return array.indexOf(c) === index;
  });
};
