/* eslint "require-jsdoc": 0 */

export function factorialize(n) {
  if (n===0) {
    return 1;
  } else {
    return n*factorialize(n-1);
  }
}
