export function checkLetters(arr) {
  const strOne = arr[0].toLowerCase();
  const strTwo = arr[1].toLowerCase();
  for (let i = 0; i < strTwo.length; i++) {
    if (strOne.indexOf(strTwo[i]) === -1) {
      return false;
    }
  }
  return true;
}
