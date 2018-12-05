export function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  for (let i = 0; i < arr.length; i++) {
    arr[i].orbitalPeriod = findOrbPeriod(arr[i].avgAlt);
    delete arr[i].avgAlt;
  }
  function findOrbPeriod(alt) {
    const axis = alt + earthRadius;
    const orbPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(axis, 3)/GM));
    return orbPeriod;
  }
  return arr;
}
