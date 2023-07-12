// sum from 1 to 100
function sumAll(firstIndex, secondIndex) {
  let sum = 0;
  for (let i = firstIndex; i <= secondIndex; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumAll(1, 100));
