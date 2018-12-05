export function uniteUnique(...arr) {
  const uniqArray = arr[0].concat(...arr);
  return uniqArray.filter(function(a, b) {
    return uniqArray.indexOf(a)==b;
  });
}
