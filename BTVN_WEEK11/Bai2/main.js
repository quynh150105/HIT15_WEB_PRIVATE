const n = document.querySelector("input");
const button = document.querySelector("button");
const sochan = document.querySelector(".sochan");
const sole = document.querySelector(".sole");
const songto = document.querySelector(".songto");
const content3 = document.querySelector(".content3");
const table = document.querySelector(".table");

// table.textContent = "red";
// table.style.backgroundColor = "blue";
document.body.appendChild(table);

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

button.addEventListener("click", () => {
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;

  table.innerHTML = "";

  for (let i = 0; i < parseInt(n.value); i++) {
    const number = document.createElement("span");

    if (i % 2 == 0) {
      number.className = "odd_number";
      number.textContent = i;
      count1++;
      if (isPrime(i)) {
        number.className = "prime_number";
        number.textContent = i;
        count3++;
      }
    } else {
      number.className = "even_number";
      number.textContent = i;
      count2++;
      if (isPrime(i)) {
        number.className = "prime_number";
        number.textContent = i;
        count3++;
      }
    }

    table.appendChild(number);
  }

  sochan.textContent = `Số chẵn: ${count1}`;
  sole.textContent = `Số lẻ: ${count2}`;
  songto.textContent = `Số nguyên tố: ${count3}`;

  console.log(count1);
  console.log(count2);
  console.log(count3);
});

console.log(n);
console.log(button);
console.log(sochan);
console.log(sole);
console.log(songto);
