export function abbreviated(name) {
  let splitedName = name.split(' ');
  for (let i = 1; i < splitedName.length; i++) {
    splitedName[i] = splitedName[i].charAt(0) + '.';
  }
  return splitedName.join(' ');
}
