export default (numbers) => {
  const sortNumbers = numbers.sort();
  if (numbers.length % 2 === 0) {
    return (sortNumbers[(sortNumbers.length / 2) - 1] + sortNumbers[(sortNumbers.length / 2) + 1]) / 2
  }
  return sortNumbers[Math.round((numbers.length - 1) / 2)];
}