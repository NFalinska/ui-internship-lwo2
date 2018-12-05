export const runningAverage = () => {
  const arr = [];
  return function(n) {
    arr.push(n);
    return arr.reduce((a, b) => a + b ) / arr.length;
  };
};

