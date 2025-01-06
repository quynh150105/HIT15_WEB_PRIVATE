const input = document.querySelector("input");
const button = document.querySelector("button");
const even_number = document.querySelector(".even");
const odd_number = document.querySelector(".odd");
const prime_number = document.querySelector(".prime");
const result = document.querySelector(".result");
const table = document.querySelector(".table");

document.body.appendChild(table);

function isPrime(input) {
  if (input < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(input); i++) {
    if (input % i == 0) {
      return false;
    }
  }
  return true;
}

button.addEventListener("click", () => {
  let count_even = 0;
  let count_odd = 0;
  let count_prime = 0;

  table.innerHTML = "";

  for (let i = 0; i < parseInt(input.value); i++) {
    const number = document.createElement("span");

    if (i % 2 == 0) {
      number.className = "odd_number";
      number.textContent = i;
      count_even++;
      if (isPrime(i)) {
        number.className = "prime_number";
        number.textContent = i;
        count_prime++;
      }
    } else {
      number.className = "even_number";
      number.textContent = i;
      count_odd++;
      if (isPrime(i)) {
        number.className = "prime_number";
        number.textContent = i;
        count_prime++;
      }
    }

    table.appendChild(number);
  }

  even_number.textContent = `${count_even}`;
  odd_number.textContent = `${count_odd}`;
  prime_number.textContent = `${count_prime}`;
});
