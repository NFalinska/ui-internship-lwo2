export function rowWeights(arr) {
  let odd = 0;
  let even = 0;
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      even += arr[i];
    } else {
      odd += arr[i];
    }
  }
  newArr.push(even, odd);
  return newArr;
}
