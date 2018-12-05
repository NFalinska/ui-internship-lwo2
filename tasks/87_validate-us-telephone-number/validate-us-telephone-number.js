/* eslint max-len: ["error", { "code": 100 }] */

export function telephoneCheck(str) {
  let regex = /^\s*1?\s*((\(\d{3}\))|(\d{3}))\s*-?\s*(\d{3})\s*-?\s*(\d{4})\s*$/;
  return regex.test(str);
}
