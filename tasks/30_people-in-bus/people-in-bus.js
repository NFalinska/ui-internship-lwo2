export function peopleInBus(arr) {
  let inBus = 0;
  for (let i = 0; i < arr.length; i++) {
    let stop = arr[i];
    inBus = inBus + stop[0] - stop[1];
  }
  return inBus;
}
