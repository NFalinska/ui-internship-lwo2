/* eslint-disable */ 

export function largestOfFour(arr) {
  return arr.map(function(subArr) {
    return Math.max.apply(null, subArr);
  });
}
