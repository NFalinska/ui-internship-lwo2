/* eslint-disable */ 

export function humanizeFormat(date) {
  if (date) {
    let strDate = date.toString();
    let last = strDate.substr(-1);
    if (last == 1) {
      return date + 'st';
    } else if (last == 2) {
      return date + 'nd';
    } else if (last == 3) {
      return date + 'rd';
    } else {
      return date + 'th';
    }
  }
  return '';
}
