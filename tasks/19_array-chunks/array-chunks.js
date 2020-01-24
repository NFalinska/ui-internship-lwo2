/* eslint-disable */ 

export function arrayChunks(arr, size) {
  const chunkedArr = [];
  let i = 0;
  while (i < arr.length) {
    chunkedArr.push(arr.slice(i, size + i));
    i += size;
  }
  return chunkedArr;
}
