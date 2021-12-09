export default (numbers) => {
  const average = numbers.reduce((i, j) => {
    return i + j
  }) / numbers.length
  return average
}