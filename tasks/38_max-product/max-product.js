export function maxProduct(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    newArr.push(arr[i] * arr[i + 1]);
  }
  return Math.max(...newArr);
}
