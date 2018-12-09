const DAYS = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
function checkSequentialDays(first, second) {
  const firstIndex = DAYS.findIndex((elem) => elem === first.day);
  const secondIndex = DAYS.findIndex((elem) => elem === second.day);
  return secondIndex - firstIndex === 1;
}
function testDivide(sortedArray) {
  let result = [];
  sortedArray.reduce((prev, cur) => {
    const range = `${cur.from} - ${cur.to}`;
    if (result.length === 0) {
      const firstRange = `${prev.from} - ${prev.to}`;
      result.push({
        range: firstRange,
        start: Object.assign({}, prev),
        end: Object.assign({}, prev),
      });
    }
    const index = result.findIndex((elem) => elem.range === range);
    if (index === -1 || !checkSequentialDays(result[index].end, cur) ) {
      result.push({
        range: range,
        start: Object.assign({}, cur),
        end: Object.assign({}, cur),
      });
    } else {
      result[index].end = Object.assign({}, cur);
    }
    return cur;
  });
  return result;
}
export function formatWorkingHours(input) {
  if (!input.length && Array.isArray(input)) {
    return [];
  }
  const sorted = DAYS.map((day) => {
    return input.find((inputDay) => inputDay.day === day);
  });
  const arrObj = testDivide(sorted);
  const res = [];
  for (let i = 0; i < arrObj.length; i++) {
    const range = arrObj[i];
    if (range.start.day === range.end.day) {
      res.push(`${range.start.day.toUpperCase()}: ${range.range}`);
    } else {
      res.push(`${range.start.
          day.toUpperCase()} - ${range.end.day.toUpperCase()}: ${range.range}`);
    }
  }
  return res;
}
