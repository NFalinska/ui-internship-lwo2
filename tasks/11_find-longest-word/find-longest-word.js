/* eslint-disable */ 

export function findLongestWord(str) {
  let strArr = str.split(' ');
  let theLongest = strArr[0];
  for (let i=0; i<strArr.length; i++) {
    if (strArr[i].length>theLongest.length) {
      theLongest = strArr[i];
    }
  }
  return theLongest.length;
}
