export function convertToRoman(num) {
  if (typeof num !== 'number') return false;
  const digits = num.toString().split('');
  const key = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM',
    '', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC',
    '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  let romanNumer = '';
  let i = 3;
  while (i--) {
    romanNumer = (key[+digits.pop() + (i * 10)] || '') + romanNumer;
  }
  return Array(+digits.join('') + 1).join('') + romanNumer;
}
