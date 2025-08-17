const numbers = [10, 29, 48, 18, 17, 31];
let average = 0;

function findAverage(array) {
  for (let i = 0; i < array.length; i++) {
    average += array[i];
  }
  return average / array.length;
}

console.log(findAverage(numbers));
