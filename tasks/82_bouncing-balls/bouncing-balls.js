export function bouncingBall(h, bounce, window) {
  let count = 0;
  while (h>window) {
    h = h * bounce;
    count = count + 2;
  }
  return count-1;
}
