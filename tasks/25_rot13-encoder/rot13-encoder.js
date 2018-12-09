export function rot13Encoder(str) {
  let input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
  let index = (x) => input.indexOf(x);
  let translate = (x) => index(x) > -1 ? output[index(x)] : x;
  return str.split('').map(translate).join('');
}
