const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];

let sumArray1 = 0;
let sumArray2 = 0;

for (let number of array1) {
  sumArray1 += number;
}

console.log("сума елементів першого масиву:", sumArray1);

for (let number of array2) {
  sumArray2 += number;
}

console.log("сума елементів другого масиву:", sumArray2);

let totalSum = sumArray1 + sumArray2;

console.log("Загальна сума елементів двох масивів:", totalSum);
