export function uniqueInOrder(args) {
  const uniq = [];
  for (let i = 0; i < args.length; i++) {
    if (args[i] !== args[i + 1]) {
      uniq.push(args[i]);
    }
  }
  return uniq;
}
