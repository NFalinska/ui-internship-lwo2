export function getIndexToInsert(arr, item) {
  const result = arr.filter((el) => el < item);
  return result.length;
}
