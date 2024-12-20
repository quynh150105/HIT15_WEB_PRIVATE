let str = prompt("nhap cac so cach nhau bang dau ,");
let arr = str.split(",").map(Number);

//tim max
let max = arr[0];
for (const number of arr) {
  if (number > max) max = number;
}

//tim min
let min = arr[0];
for (const number of arr) {
  if (number < min) min = number;
}

//tim so chan
let chan = [];
for (const number of arr) {
  if (number % 2 == 0) chan.push(number);
}

alert(`So lon nhat: ${max} \n So nho nhat: ${min} \n So chan: ${chan}`);
