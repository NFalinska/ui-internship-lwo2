export function binaryEncode(str) {
  if (!str) return '';
  return str.split('')
      .map((char) => {
        char = char.charCodeAt(0).toString(2);
        if (char.length === 7) char = '0' + char;
        if (char.length === 6) char = '00' + char;
        return char;
      }).join(' ');
}
