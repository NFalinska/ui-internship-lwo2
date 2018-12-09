export function sortByBits(arr) {
  return arr.sort(function(a, b) {
    const num = (a.toString(2).match(/1/g) || []).length
             - (b.toString(2).match(/1/g) || []).length;
    if (num !== 0) {
      return num;
    }
    return a - b;
  });
}
