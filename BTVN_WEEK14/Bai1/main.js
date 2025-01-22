const text = document.querySelector(".section_1");
const AddButton = document.querySelector(".Add");
const tag = document.querySelector(".tag");
const time = document.querySelector(".time");
const listMission = document.querySelector(".List");

AddButton.addEventListener("click", () => {
  if (!text.value.trim() || !time.value.trim() || !tag.value.trim()) {
    alert("Hãy nhập đủ thông tin!");
    return;
  }

  // tao the chua cac noi dung
  const info = document.createElement("div");
  info.className = "info";

  // tao noi dung nhiem vu
  const mission_info = document.createElement("p");
  mission_info.className = "mission_info";
  mission_info.textContent = text.value;

  // tao thoi gian
  const icon_time = document.createElement("i");
  icon_time.className = "fas fa-calendar-alt";
  const mission_time = document.createElement("p");
  mission_time.className = "mission_time";
  mission_time.appendChild(icon_time);
  mission_time.appendChild(document.createTextNode(` ${time.value}`));

  // tao tag
  const icon_tag = document.createElement("i");
  icon_tag.className = "fas fa-tag";
  const mission_tag = document.createElement("p");
  mission_tag.className = "mission_tag";
  mission_tag.appendChild(icon_tag);
  mission_tag.appendChild(document.createTextNode(` ${tag.value}`));

  // tao button complete
  const CompleteButton = document.createElement("button");
  CompleteButton.className = "complete";
  CompleteButton.textContent = "Complete";

  // tao button edit
  const EditButton = document.createElement("button");
  EditButton.className = "edit";
  EditButton.textContent = "Edit";

  // tao button delete
  const DeleteButton = document.createElement("button");
  DeleteButton.className = "delete";
  DeleteButton.textContent = "Delete";

  // tao the chua cac button
  const buttons = document.createElement("div");
  buttons.className = "buttons";
  // them cac button
  buttons.appendChild(CompleteButton);
  buttons.appendChild(EditButton);
  buttons.appendChild(DeleteButton);

  // them cac thong tin nhiem vu
  info.appendChild(mission_info);
  info.appendChild(mission_time);
  info.appendChild(mission_tag);

  // tao the nhiem vu
  const mission = document.createElement("div");
  mission.className = "mission";

  // add cac thong tin vao the nhiem vu
  mission.appendChild(info);
  // add cac button vao the nhiem vu
  mission.appendChild(buttons);

  // add nhiem vu vao danh sanh
  listMission.appendChild(mission);

  // completeEvent
  completeEvent(CompleteButton, mission_info);
  // deleteEvent
  deleteEvent(DeleteButton, buttons);
  // editEvent
  editEvent(EditButton, info, mission_info);

  text.value = "";
  tag.value = "";
  time.value = "";
});

// completeEvent
function completeEvent(button, p) {
  button.addEventListener("click", () => {
    if (button.textContent === "Complete") {
      button.textContent = "Undo";
      p.style.textDecoration = "line-through";
    } else if (button.textContent === "Undo") {
      button.textContent = "Complete";
      p.style.textDecoration = "none";
    }
  });
}

// deleteEvent
function deleteEvent(button, div) {
  button.addEventListener("click", () => {
    const mission = div.parentElement;
    listMission.removeChild(mission);
  });
}

// editEvent div: parentElement, P: mission_info
function editEvent(button, div, p) {
  button.addEventListener("click", () => {
    if (button.textContent === "Edit") {
      const newInfo = document.createElement("textarea");
      button.textContent = "Save";
      button.style.backgroundColor = "#218838";
      newInfo.className = "new_mission_info";
      newInfo.value = p.textContent;
      div.replaceChild(newInfo, p);
    } else if (button.textContent === "Save") {
      const newInfo = div.querySelector("textarea");
      p.textContent = newInfo.value;
      button.textContent = "Edit";
      button.style.backgroundColor = "";
      div.replaceChild(p, newInfo);
    }
  });
}
