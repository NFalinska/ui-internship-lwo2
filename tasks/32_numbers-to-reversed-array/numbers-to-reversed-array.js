export function numberToReversedArray(num) {
  const reversedArr = num.toString().split('').reverse();
  const numArr = reversedArr.map((el) => {
    return Number(el);
  });
  return numArr;
}
