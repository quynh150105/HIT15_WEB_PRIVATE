let bmi;

const h3 = document.querySelector("h3");
const kg = document.querySelector(".height");
const m = document.querySelector(".width");
const button = document.querySelector("button");
console.log(kg);
console.log(m);
console.log(button);
console.log(h3);
button.addEventListener("click", () => {
  if (parseFloat(m.value) < 0 || parseFloat(m.value) > 2) {
    h3.textContent = `Nhập chiều cao không hợp lệ, vui lòng nhập lại!`;
    return;
  }
  bmi = (parseFloat(kg.value) / parseFloat(m.value) ** 2).toFixed(2);
  if (bmi < 18.5) h3.textContent = `BMI: ${bmi} - Cơ thể bạn quá là gầy!`;
  else if (bmi >= 18.5 && bmi < 24.9)
    h3.textContent = `BMI: ${bmi} - Cơ thể bạn quá là đẹp!`;
  else if (bmi >= 25 && bmi < 29.9)
    h3.textContent = `BMI: ${bmi} - Cơ thể bạn hơi mũm mĩm!`;
  else if (bmi >= 30 && bmi < 34.9)
    h3.textContent = `BMI: ${bmi} - Cơ thể bạn hơi mũm mĩm quá r đấy!`;
  else if (bmi >= 35 && bmi < 39.9)
    h3.textContent = `BMI: ${bmi} - Chuẩn bị tinh thần giảm cân thoii!`;
  else if (bmi >= 40) h3.textContent = `BMI: ${bmi} - Cơ thể bạn hết cứu:))!`;
});
