export function nbMonths(startPriceOld, startPriceNew,
    savingPerMonth, percentLossByMonth) {
  if (startPriceOld >= startPriceNew) {
    return [0, Math.floor(startPriceOld - startPriceNew)];
  }
  let months = 0;
  let totalSaving = 0;
  let decreasedPriceNew = startPriceNew;
  let decreasedPriceOld = startPriceOld;
  let loss = percentLossByMonth;
  while ((totalSaving + decreasedPriceOld) < decreasedPriceNew) {
    months += 1;
    if (months % 2 === 0) {
      loss += 0.5;
    }
    totalSaving += savingPerMonth;
    decreasedPriceOld -= decreasedPriceOld * (loss / 100);
    decreasedPriceNew -= decreasedPriceNew * (loss / 100);
  }
  return [months,
    Math.round(totalSaving + decreasedPriceOld - decreasedPriceNew)];
}
