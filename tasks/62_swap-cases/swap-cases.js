export function swapCases(word) {
  let newWord = '';
  for (let i = 0; i < word.length; i++) {
    if (word.charCodeAt(i) >= 65 && word.charCodeAt(i) <= 90) {
      newWord = newWord + word.charAt(i).toLowerCase();
    } else {
      newWord = newWord + word.charAt(i).toUpperCase();
    }
  }
  return newWord;
}

