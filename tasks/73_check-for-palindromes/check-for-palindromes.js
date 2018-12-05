export function palindrome(str) {
  const newStr = str.replace(/[^\w]|_/g, '').toLowerCase();
  return newStr === newStr.split('').reverse().join('');
}
