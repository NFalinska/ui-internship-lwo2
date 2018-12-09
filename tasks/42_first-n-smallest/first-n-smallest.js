export function firstNSmallest(arr, item) {
  while (arr.length > item) {
    arr.splice(arr.lastIndexOf(Math.max(...arr)), 1);
  }
  return arr;
}
