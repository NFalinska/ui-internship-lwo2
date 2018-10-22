export function arrayPlusArray(arr1, arr2) {
  let arr1Len = arr1.length;
  let arr2Len = arr2.length;
  arr1Len = arr1Len > arr2Len ? arr2Len = arr1Len : arr1Len = arr2Len;
  let arr3 = [];
  for (let i = 0; i < arr1Len; i++) {
    if (typeof arr1[i] === 'undefined') arr1[i] = 0;
    if (typeof arr2[i] === 'undefined') arr2[i] = 0;
    arr3.push(arr1[i] + arr2[i]);
  }
  return arr3;
}