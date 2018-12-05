export function maxTripletSum(arr) {
  const uniqueArray = arr.filter(function(item, pos) {
    return arr.indexOf(item) == pos;
  });
  const sortArr = uniqueArray.sort((a, b) => b - a);
  return sortArr[0] + sortArr[1] + sortArr[2];
}
