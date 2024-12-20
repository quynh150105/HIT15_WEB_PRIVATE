for (let i = 1; i <= 10; i++) {
  let line = "";
  // in khoang trang
  for (let j = 1; j <= 10 - i; j++) {
    line += " ";
  } // in dau *
  for (let j = 1; j <= 2 * i - 1; j++) {
    line += "*";
  }
  console.log(line);
}

//in ra goc cay
let tree = ["        *", "        *", "       * * *"];
for (let line of tree) console.log(line);
