export function findCloseIndex(str, item) {
  if (str[item] !== '(') return -1;
  let brackers = 0;
  for (let i = item; i < str.length; i++) {
    if (str[i] === '(' ) brackers ++;
    if (str[i] === ')' ) brackers --;
    if ( brackers === 0) return i;
  }
  return brackers;
}

