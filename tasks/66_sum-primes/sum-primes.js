export function sumPrimes(num) {
  const primeArr = [];
  function isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num !== 1;
  }
  for (let j = 0; j<= num; j++) {
    if (isPrime(j)) {
      primeArr.push(j);
    }
  }
  const allSum = primeArr.reduce((a, b)=> a + b);
  return allSum;
}
