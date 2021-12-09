export default (triangleSizes) => {
  const sizes = { a: Math.pow(triangleSizes[0], 2), b: Math.pow(triangleSizes[1] / 2, 2), c: triangleSizes[2] }
  const base = triangleSizes[1];
  const height = Math.sqrt(sizes.a - sizes.b);
  return (base * height) / 2
}