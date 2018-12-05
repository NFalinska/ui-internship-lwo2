export function sumPrimeIndexedElements(arr) {
  const primeArr = [];
  const arrLength = arr.length;
  function isPrime(n) {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false;
    }
    return n !== 1;
  }
  if (arrLength > 0) {
    for (let j = 2; j < arrLength; j++) {
      if (isPrime(j)) {
        primeArr.push(arr[j]);
      }
    }
  } else {
    return 0;
  }
  return primeArr.reduce((a, b)=> a + b);
}

