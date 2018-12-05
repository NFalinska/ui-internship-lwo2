export function translatePigLatin(str) {
  let vowel = 'aeiou';
  let match = -1;
  let index = -1;
  for (let i = 0; i < str.length && match < 0; i++) {
    match = vowel.indexOf(str.charAt(i));
    if (match >= 0) {
      index = i;
    }
  }
  if (index > 0) {
    str = str.slice(index) + str.substring(0, index) + 'ay';
  } else {
    str = str.slice(index) + str.substring(0, index) + 'way';
  }
  return str;
}
