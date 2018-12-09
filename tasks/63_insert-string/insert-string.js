export function insert(str, word, item) {
  if (!word) return str;
  if (!item) item = 0;
  return str.slice(0, item) + word + str.slice(item);
}
