export function pairwise(arr, target) {
  let results = 0;
  for (let i=0; i<arr.length; i++) {
    for (let j=i+1; j<arr.length; j++) {
      if (arr[j] + arr[i] == target) {
        arr[j] = arr[i] = undefined;
        results += i + j;
      }
    }
  }
  return results;
}


