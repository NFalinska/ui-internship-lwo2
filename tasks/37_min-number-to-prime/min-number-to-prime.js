export function minNumberToPrime(arr) {
  const arrSum = arr.reduce((a, b) => a + b);
  function isPrime(value) {
    for (let x = 2; x < value; x++) {
      if (value % x === 0) {
        return false;
      }
    }
    return true;
  }
  let count = 0;
  while (!isPrime(arrSum + count)) {
    count++;
  }
  return count;
}
