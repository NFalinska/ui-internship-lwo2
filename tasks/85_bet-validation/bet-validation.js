/* eslint-disable-next-line */
export function validate_bet(arr, str) {
  const input = str.split(/[\s,]+/);
  let numsQuantity = arr[0];
  let maxNum = arr[1];
  for (let i = 0; i < input.length; i++) {
    if (isNaN(input[i]) || input[i] < 1 || input[i] > maxNum) {
      return 'None';
    }
  }
  if (input.length !== numsQuantity) {
    return 'None';
  }
  return input.sort();
}
