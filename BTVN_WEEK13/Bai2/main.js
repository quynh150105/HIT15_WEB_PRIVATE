const input = document.querySelector(".input");
const AddButton = document.querySelector(".Add");
const list = document.querySelector(".list");

AddButton.addEventListener("click", () => {
  if (input.value !== "") {
    const mission = document.createElement("div");
    mission.className = "mission";

    const content = document.createElement("p");
    content.className = "content";
    content.textContent = input.value;

    const Del = document.createElement("button");
    Del.className = "delete";
    Del.textContent = "Delete";

    mission.appendChild(content);
    mission.appendChild(Del);

    list.appendChild(mission);

    addDeleteEvent(Del);
    input.value = "";
  }
});

function addDeleteEvent(button) {
  button.addEventListener("click", () => {
    const mission = button.parentElement;
    list.removeChild(mission);
  });
}
