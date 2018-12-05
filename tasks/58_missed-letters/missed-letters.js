export function findLetter(str) {
  let i; let j = 0; let n = 122;
  if (str) {
    i = str.charCodeAt(0);
    while (i <= n && j < str.length) {
      if (String.fromCharCode(i) !== str.charAt(j)) {
        return String.fromCharCode(i);
      }
      i++; j++;
    }
  }
  return undefined;
}
