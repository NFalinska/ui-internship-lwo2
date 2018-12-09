export function binaryDecode(str) {
  if (!str) return '';
  return str.replace(/\d+./g, (x)=>String.fromCharCode('0b'+x));
}
