function greatestCommonDivisor(x, y) {
  while (y) {
    let t = y;
    y = x % y;
    x = t;
  }

  return x;
}
export function leastCommonMultiple(x, y) {
  if (!x || !y) {
    return 0;
  } else {
    return Math.abs((x * y) / greatestCommonDivisor(x, y));
  }
}
