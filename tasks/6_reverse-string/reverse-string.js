/* eslint "require-jsdoc": 0 */

export function reverseString(str) {
  let newStr = str.split('').reverse().join('');
  return newStr;
}
