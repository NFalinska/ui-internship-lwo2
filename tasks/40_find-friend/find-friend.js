export function findFriend(arr) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'red') {
      if (arr[i - 1] === 'blue' && arr[i + 1] === 'blue') {
        counter += 1;
      } else if (arr[i + 1] === 'blue' && arr[i + 2] === 'blue') {
        counter += 1;
      } else if (arr[i - 1] === 'blue' && arr[i - 2] === 'blue') {
        counter += 1;
      }
    }
  }
  return counter;
}

