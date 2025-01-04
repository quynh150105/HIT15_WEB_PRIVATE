let bmi;
const title = document.querySelector(".message");
const weight = document.querySelector(".weight");
const height = document.querySelector(".height");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  if (height.value == "" || weight.value == "") {
    title.textContent = "Bạn chưa nhập chiều cao và cân nặng!";
    return;
  }

  bmi = (parseFloat(weight.value) / parseFloat(height.value) ** 2).toFixed(2);
  if (bmi < 18.5) title.textContent = `BMI: ${bmi} - Cơ thể bạn quá là gầy!`;
  else if (bmi >= 18.5 && bmi < 24.9)
    title.textContent = `BMI: ${bmi} - Cơ thể bạn quá là đẹp!`;
  else if (bmi >= 25 && bmi < 29.9)
    title.textContent = `BMI: ${bmi} - Cơ thể bạn hơi mũm mĩm!`;
  else if (bmi >= 30 && bmi < 34.9)
    title.textContent = `BMI: ${bmi} - Cơ thể bạn hơi mũm mĩm quá r đấy!`;
  else if (bmi >= 35 && bmi < 39.9)
    title.textContent = `BMI: ${bmi} - Chuẩn bị tinh thần giảm cân thoii!`;
  else if (bmi >= 40)
    title.textContent = `BMI: ${bmi} - Cơ thể bạn hết cứu:))!`;
  else {
    title.textContent = `Bạn vui lòng nhập đúng chiều cao và cân nặng!`;
  }
});
