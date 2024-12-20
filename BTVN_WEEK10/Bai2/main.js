let input = prompt("nhap thang cua ban: ").toLowerCase();
let month = input.charAt(0).toUpperCase() + input.slice(1);
let day = 0;
if (
  month === "January" ||
  month === "March" ||
  month === "May" ||
  month === "July" ||
  month === "August" ||
  month === "October" ||
  month === "December"
) {
  day = 31;
} else if (
  month === "April" ||
  month === "June" ||
  month === "September" ||
  month === "November"
) {
  day = 30;
} else if (month === "February") {
  day = 28;
} else {
  alert(`${month} khong hop le!`);
}
alert(`${month} has ${day} days!`);
