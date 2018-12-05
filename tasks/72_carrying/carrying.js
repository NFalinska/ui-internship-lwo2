export function addTogether(...arg) {
  if (typeof arg[0] !== 'number') return undefined;
  if (arg[1] === undefined) {
    return function(value) {
      if (typeof value!== 'number') {
        return undefined;
      }
      return arg[0] + value;
    };
  }
  if (typeof arg[1] !== 'number') return undefined;
  return arg[0] + arg[1];
}
