const width = document.querySelector("#width");
const height = document.querySelector("#height");
const padding = document.querySelector("#padding");
const margin = document.querySelector("#margin");
const background_color = document.querySelector("#background_color");
const backgroundImage = document.querySelector("#background_image");
const text_color = document.querySelector("#text_color");
const content = document.querySelector("#content");
const draw = document.querySelector(".draw");
const reset = document.querySelector(".reset");
const shape = document.querySelector(".shape");
const inputs = document.querySelectorAll("input");

draw.addEventListener("click", () => {
  shape.style.width = width.value;
  shape.style.height = height.value;
  shape.style.padding = padding.value;
  shape.style.margin = margin.value;
  shape.style.backgroundColor = background_color.value;
  shape.style.backgroundImage = `url(${backgroundImage.value})`; // background_image
  shape.style.color = text_color.value;
  shape.style.textContent = content.value;
});

reset.addEventListener("click", function () {
  shape.removeAttribute("style");
  for (let input of inputs) {
    input.value = "";
  }
});
