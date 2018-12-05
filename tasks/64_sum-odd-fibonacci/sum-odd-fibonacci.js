export function sumFibs(num) {
  let start = 0;
  let next = 1;
  let current;
  let sumOdd = 0;
  for (let i = 0; i <= num; i++) {
    current = start + next;
    start = next;
    next = current;
    if (current % 2 !== 0 && current <= num) {
      sumOdd = current + sumOdd;
    }
  }
  return sumOdd + 1;
}
