export default (numbers) => {
  let sortNumbers = numbers.sort();
  let moreTimes = [];
  let counter = 1;
  for (let j = 0; j < sortNumbers.length; j++) {
    if (sortNumbers[j] == sortNumbers[j + 1]) {
      counter++
    } else {
      moreTimes.push(counter);
      counter = 1
    }
  }
  counter = 1;
  moreTimes.sort();
  const max = moreTimes[moreTimes.length - 1];
  for (let i = 0; i < sortNumbers.length; i++) {
    if (sortNumbers[i] == sortNumbers[i + 1]) {
      counter++;
    }
    if (counter === max) {
      return sortNumbers[i];
    }
  }
}