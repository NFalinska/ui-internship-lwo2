/* eslint "require-jsdoc": 0 */

export function getNumbers(str) {
  let regex = /\d+/g;
  let found = str.match(regex);
  let numArr = found.map( (el) => {
    return Number(el);
  });
  return numArr;
}
