export function validBraces(str) {
  const matches = {'(': ')', '{': '}', '[': ']'};
  const stack = [];

  for (let i=0; i<str.length; i++) {
    if (matches[str[i]]) {
      stack.push(str[i]);
    } else {
      if (str[i] !== matches[stack.pop()]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
