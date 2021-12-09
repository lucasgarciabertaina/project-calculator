export default (triangleSizes) => {
  const value = triangleSizes.reduce((i, j) => {
    return i + j
  });
  return value;
};