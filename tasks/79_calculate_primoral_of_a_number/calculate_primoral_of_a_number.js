export function numPrimorial(num) {
  const primeArr = [];
  function isPrime(n) {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false;
    }
    return n !== 1;
  }
  for (let j = 1; primeArr.length!== num; j++) {
    if (isPrime(j)) {
      primeArr.push(j);
    }
  }
  return primeArr.reduce((a, b)=> a * b);
}
