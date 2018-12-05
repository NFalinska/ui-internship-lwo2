/* eslint-disable*/
String.prototype.camelCase = function() {
  let newArr = this.split(' ');
  for (let i = 0; i < newArr.length; i++) {
    newArr[i] = newArr[i].charAt(0).toUpperCase() + newArr[i].slice(1);
  }
  return newArr.join('');
};
