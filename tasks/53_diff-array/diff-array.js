export const diffArray = (arr1, arr2) => {
  const newArray = arr1.concat(arr2);
  return newArray.filter((el, i, arr) => arr.indexOf(el)
  === arr.lastIndexOf(el));
};
