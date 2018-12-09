export function whatIsInAName(array1, array2) {
  const keys = Object.keys(array2);

  return array1.filter(function(obj) {
    return keys.every(function(key) {
      return obj.hasOwnProperty(key) && obj[key] === array2[key];
    });
  });
}
