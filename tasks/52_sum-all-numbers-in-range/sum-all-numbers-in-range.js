export function sumAll(array) {
  return array
      .sort((a, b) => a - b)
      .reduce((a, b) => (a + b) * (b - a + 1) / 2);
}
