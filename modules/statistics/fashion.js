export default (numbers) => {
  let sortNumbers = numbers.sort();
  let moreTimes = [];
  let array = []
  let counter = 0
  for (let j = 0; j < sortNumbers.length; j++) {
    if (sortNumbers[j] == sortNumbers[j + 1]) {
      counter++
    } else {
      moreTimes.push(counter);
      counter = 0
    }
  }
  console.log(moreTimes)
}