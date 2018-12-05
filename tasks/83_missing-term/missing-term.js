export function findMissing(arr) {
  const alpha = (arr[arr.length - 1] - arr[0])/arr.length;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i+1] - arr[i] !== alpha) {
      return arr[i] + alpha;
    }
  }
}
