/*
- Bài 1:
+ Giao diện chưa ổn, chưa đúng yêu cầu, quá sơ sài
+ Nếu anh nhập mỗi chuỗi kí tự thì có thông báo như thế nào?
+ Đặt id chưa hợp lí, tại sao cân nặng, chiều cao lại đặt là height và width //done
+ Tên các biến không nên đặt là h3, kg, m, hãy đặt thành message, mass hoặc height. //done
+ Anh đọc code JS không hiểu
+ Xóa các đoạn mã console.log không cần thiết đi nha //done
*/

/*
- Bài 2:
+ Kết quả đã chạy đúng nhưng giao diện chưa đạt yêu cầu như đề bài
+ Thay vì đặt tên class là content1, content2, content3 thì sao không đổi thành title, input-number, result? Nhìn vào sẽ hiểu được thẻ html đó nhằm mục đích gì phải không?
+ Em nghĩ sao về việc thay đoạn html
<div><p class="sochan">Số chẵn: None</p></div>
👉 <p>Số chẵn: <span class="even">None</span></p>
Vậy là anh chỉ cần thay giá trị vào chỗ "None" phải không?
+ Tên các biến nên thống nhất đặt bằng tiếng anh hoặc tiếng việt, không lẫn lộn cả hai. Đặt tên phải có ý nghĩa
+ Bỏ các dòng console.log() đi nhé
*/
let bmi;
const title = document.querySelector(".message");
const weight = document.querySelector(".weight");
const height = document.querySelector(".height");
const button = document.querySelector("button");

function isAlpha(str) {
  return /^[a-zA-Z]+$/.test(str);
}

button.addEventListener("click", () => {
  /*
  if (isAlpha(height.value) || isAlpha(weight.value)) {
    message.textContent = "Không nhận ký tự, vui lòng nhập số hợp lệ!";
    return;
  }
  if (parseFloat(height.value) < 0 || parseFloat(height.value) > 2) {
    message.textContent = `Nhập chiều cao không hợp lệ, vui lòng nhập lại!`;
    return;
  }
*/

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
