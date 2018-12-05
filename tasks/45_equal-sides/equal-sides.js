export function findEqualIndex(arr) {
  let rightSum = arr.reduce((a, b) => a + b, 0);
  let leftSum = 0;
  for (let i = 0; i < arr.length; i++) {
    rightSum -= arr[i];
    if (rightSum === leftSum) {
      return i;
    } else {
      leftSum += arr[i];
    }
  }
  return -1;
}

