export function smallestCommons(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  let mltple = max;
  for (let i = max; i >= min; i--) {
    if (mltple % i !== 0) {
      mltple += max;
      i = max;
    }
  }
  return mltple;
}
