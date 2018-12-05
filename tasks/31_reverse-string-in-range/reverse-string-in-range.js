export function reverseStringInRange(str, arr) {
  const slicedString = str.slice(arr[0], (arr[1] + 1));
  const reversedString = slicedString.split('').reverse().join('');
  return str.replace(new RegExp(slicedString, 'g'), reversedString);
}
