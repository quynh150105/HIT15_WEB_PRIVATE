// function greet(name = "bạn") {
//   console.log(`Xin chào, ${name}!`);
// }
// greet(); // Output: Xin chào, bạn!
// greet("Mai"); // Output: Xin chào, Mai!

// function sum(...number) {
//   let total = 0;
//   for (let i = 0; i < number.length; i++) {
//     total += number[i];
//   }
//   return total;
// }

// const tenHam = function (thamSo1, thamSo2) {
//   return thamSo1 + thamSo2;
// };

// const tenHam = (thamSo1, thamSo2) => thamSo1 + thamSo2;

// console.log(tenHam(2, 3)); // Output: 5

//console.log(tenHam(2, 3)); // Output: 5

// console.log(sum(1, 2, 3, 4, 5, 6));
// console.log(sum(10, 20));
// console.log(typeof sum);

// function gt(n) {
//   if (n < 2) {
//     return 1;
//   }
//   return n * gt(n - 1);
// }

// function myCallback(name) {
//   console.log(`Hello ${name}`);
// // }
// console.log(gt(5));

// console.log(courses);

// courses.forEach(function (course, index) {
//   console.log(index, course);
// });

// var isFree = courses.every(function (course, index) {
//   return course.coin === 0;
// });

// console.log(isFree);

// const numbers = [1, 2, 3, 4, 5, 6];

// const newNums = numbers.map(function (number) {
//   return number * 2;
// });

// console.log(numbers);
// console.log(newNums);

// const courses = [
//   { id: 1, name: "Javascript", coin: 200 },
//   { id: 2, name: "HTML, CSS", coin: 0 },
//   { id: 3, name: "PHP", coin: 100 },
//   { id: 4, name: "Angular", coin: 0 },
// ];

// let i = 0;

// function callback(accumulator, currentValue) {
//   console.log(i);
//   i++;
//   console.table({
//     "Luot chay": i,
//     "Tich luy": accumulator,
//     "Gia tien": currentValue.coin,
//     "Tong tien": accumulator + currentValue.coin,
//   });

//   return accumulator + currentValue.coin;
// }

// const total = courses.reduce(callback, 0);

// const arr = [1, 2, 3, 4, 5];

// console.log(total);

// const sum = arr.reduce((acc, value) => {
//   return acc * value;
// }, 1);

// console.log(sum);

// function customeSome(arr, MyCallback) {
//   for (let i = 0; i < arr.length; i++) {
//     if (MyCallback(arr[i], i, arr)) return true;
//   }
//   return false;
// }

function customFind(arr, mycallBack, value) {
  let currentArr;
  for (let i = 0; i < arr.length; i++) {
    if (mycallBack(arr[i], value)) {
      currentArr = arr[i];
    }
  }
  return currentArr;
}

function myCallback(currentValue, value) {
  return currentValue === value;
}

const arr = [8, 8, 18, 6];

const result = customFind(arr, myCallback, 1);

console.log(result);
