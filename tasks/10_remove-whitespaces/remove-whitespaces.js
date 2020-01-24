/* eslint "require-jsdoc": 0 */
// export function trimWhiteSpaces(str) {
//   let newStr = str.split(' ').join('');
//   return newStr;
// }
export function trimWhiteSpaces(str) {
  let newStr = str.replace(/\s+/g, '');
  return newStr;
}
