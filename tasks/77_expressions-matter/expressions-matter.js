export function expressionMatter(a, b, c) {
  const modelOne = a * (b + c);
  const modelTwo = a * b * c;
  const modelThree = a + b * c;
  const modelFour = (a + b) * c;
  const modelFive = (a + c) * b;
  const modelSix = a + b + c;
  return Math.max(modelOne, modelTwo, modelThree,
      modelFour, modelFive, modelSix);
}
