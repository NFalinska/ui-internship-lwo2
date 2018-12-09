export function removeFalsyValues(value) {
  return value.filter((item) => !!item);
}
