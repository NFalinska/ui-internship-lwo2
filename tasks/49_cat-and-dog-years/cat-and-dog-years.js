export function humanYearsCatYearsDogYears(humanYears) {
  const years = [];
  let catYears = 15;
  let dogYears = 15;
  if (humanYears == 2) {
    catYears += 9;
    dogYears += 9;
  } else if (humanYears > 2) {
    catYears = (humanYears - 2) * 4 + 24;
    dogYears = (humanYears - 2) * 5 + 24;
  }
  years.push(humanYears, catYears, dogYears);
  return years;
}
