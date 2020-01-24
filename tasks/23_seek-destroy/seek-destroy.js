export function destroyer(arr, ...items) {
  return arr.filter(function(el) {
    return items.indexOf(el) < 0;
  });
}

