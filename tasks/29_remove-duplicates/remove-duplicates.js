export function removeDuplicates(arr) {
  const uniqueArray = arr.filter(function(item, pos) {
    return arr.indexOf(item) == pos;
  });
  return uniqueArray;
}
