export function followTheSpy(arr) {
  const stop = [arr[0][0], arr[0][1]];
  for (let i = 1; i < arr.length; i++) {
    const nextStop = arr.filter((el) => el[0] === stop[i]);
    stop.push(nextStop[0][1]);
  }
  return stop.join(', ');
}

