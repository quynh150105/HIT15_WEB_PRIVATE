document.addEventListener("keydown", function (event) {
  if (event.key === "F12") {
    event.preventDefault();
    alert("f12 bị vô hiệu hóa");
  }
});
document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key === "u") {
    event.preventDefault();
    alert("ctrl + u bị vô hiệu hóa");
  }
});
document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
  alert("chuột phải bị vô hiệu hóa");
});

const String = document.querySelector(".String");
const button = document.querySelector(".check");
const title = document.querySelector(".title");
const result = document.querySelector(".result");
const box = document.querySelector(".box");

button.addEventListener("click", () => {
  result.innerHTML = "";

  const originalString = String.value;

  const cleanedString = originalString.toLowerCase();

  const reversedString = cleanedString.split("").reverse().join("");

  if (reversedString === originalString) {
    title.textContent = "Đây là Palindrome!";
  } else {
    title.textContent = "Đây không là Palindrome!";
  }

  for (let i = 0; i < originalString.length; i++) {
    const char = document.createElement("span");
    const currentChar = originalString[i];
    if (/[a-zA-Z0-9]/.test(currentChar)) {
      const Index = cleanedString.indexOf(currentChar.toLowerCase());
      if (cleanedString[Index] === reversedString[Index]) {
        char.className = "correct";
      } else {
        char.className = "wrong";
      }
    } else {
      char.className = "correct";
    }
    char.textContent = currentChar;
    result.appendChild(char);
  }
});
