export function myReplace(string, search, replacement) {
  if (/[A-Z]/.test(search[0])) {
    replacement = replacement[0].toUpperCase() +
    replacement.substr(1, replacement.length);
  }
  return string.replace(search, replacement);
}
