let name = prompt("Hom nay la ngay gi?").toLowerCase();
let message = "";
switch (name) {
  case "monday":
    message = `${
      name.charAt(0).toUpperCase() + name.slice(1)
    } is a working day `;
    break;
  case "tuesday":
    message = `${
      name.charAt(0).toUpperCase() + name.slice(1)
    } is a working day `;
    break;
  case "wednesday":
    message = `${
      name.charAt(0).toUpperCase() + name.slice(1)
    } is a working day `;
    break;
  case "thursday":
    message = `${
      nname.charAt(0).toUpperCase() + name.slice(1)
    } is a working day `;
    break;
  case "friday":
    message = `${
      naname.charAt(0).toUpperCase() + name.slice(1)
    } is a working day `;
    break;
  case "saturday":
    message = `${name.charAt(0).toUpperCase() + name.slice(1)} is a weekend `;
    break;
  case "sunday":
    message = `${name.charAt(0).toUpperCase() + name.slice(1)} is a weekend `;
    break;
  default:
    message = `${name} khong hop le!`;
}
alert(message);
