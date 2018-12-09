export function getVowelCount(str) {
  let vowel = str.match(/[aeiou]/gi);
  return vowel === null ? 0 : vowel.length;
}
