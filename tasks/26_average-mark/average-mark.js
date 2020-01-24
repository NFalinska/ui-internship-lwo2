export function getAverage(arr) {
  const total = arr.reduce(function(a, b) {
    return a + b;
  });
  return Math.round(total / arr.length);
}
