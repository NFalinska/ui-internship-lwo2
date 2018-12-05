export function arrayLeaders(arr) {
  arr.push(0, 0);
  const leaders = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr.slice(i + 1).reduce((a, b) => a + b, 0)) {
      leaders.push(arr[i]);
    }
  }
  return leaders;
}

