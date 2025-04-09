// function getUser(userId) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("✅ Lấy thông tin người dùng:", userId);
//       resolve({ userId, name: "Nguyễn Văn A" });
//     }, 1000);
//   });
// }

// function getOrders(user) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("✅ Lấy danh sách đơn hàng của:", user.name);
//       resolve(["order123", "order456"]);
//     }, 1500);
//   });
// }

// function getOrderDetails(orderId) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("✅ Lấy chi tiết đơn hàng:", orderId);
//       resolve({ orderId, item: "Laptop", price: 1500 });
//     }, 2000);
//   });
// }

// console.log("Bắt đầu...");

// getUser(1)
//   .then((user) => getOrders(user)) // Bước 1 → Bước 2
//   .then((orders) => getOrderDetails(orders[0])) // Bước 2 → Bước 3
//   .then((orderDetails) => {
//     console.log("🎉 Chi tiết đơn hàng:", orderDetails);
//   })
//   .catch((error) => console.error("❌ Lỗi:", error));
// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({ title: "Hello", body: "Nội dung", userId: 1 }),
// })
//   .then((response) => response.json())
//   .then((data) => console.log("✅ Dữ liệu phản hồi:", data))
//   .catch((error) => console.error("❌ Lỗi:", error));

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => response.json()) // Chuyển đổi dữ liệu thành JSON
//   .then((data) => console.log("📌 GET - Dữ liệu nhận được:", data))
//   .catch((error) => console.error("❌ Lỗi khi gọi API:", error));

const btn = document.querySelector(".btn");
const questionContainer = document.querySelector(".container"); // Đảm bảo chọn đúng phần tử

btn.addEventListener("mouseover", () => {
  const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
  const newY = Math.floor(Math.random() * questionContainer.offsetHeight);
  btn.style.left = `${newX}px`; // Sử dụng dấu ngoặc `backticks`
  btn.style.top = `${newY}px`; // Sử dụng dấu ngoặc `backticks`
});

console.log(btn);
