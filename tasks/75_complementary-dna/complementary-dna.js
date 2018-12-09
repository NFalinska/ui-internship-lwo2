export function DNAStrand(str) {
  const paired = [];
  let search = function(char) {
    switch (char) {
      case 'A':
        paired.push(['T']);
        break;
      case 'T':
        paired.push(['A']);
        break;
      case 'C':
        paired.push(['G']);
        break;
      case 'G':
        paired.push(['C']);
        break;
    }
  };
  for (let i = 0; i < str.length; i++) {
    search(str[i]);
  }

  return paired.join('');
}
