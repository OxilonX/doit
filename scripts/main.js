const addButton = document.querySelector(".add-button");
const addIcon = document.querySelector(".add-icon");
const deleteButton = document.querySelector(".delete-icon");
const input = document.querySelector(".task-input");
const themesIcon = document.querySelector(".themes-icon");
let allTasks = [];
let tasksContainer = document.querySelector(".tasks-container");
let task = document.querySelector(".task-container");
let i = 0;
function addTask() {
  const taskContent = input.value.trim();
  if (taskContent) {
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");

    taskContainer.innerHTML = `
      <div class="inset-task">
        <label class="checkbox">
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
        <div class="task">${taskContent}</div>
      </div>
      <img src="icons/icons8-delete-60-black.png" alt="" class="delete-icon" />
    `;

    tasksContainer.appendChild(taskContainer);
    input.value = "";
  }
}
function deleteTask() {
  tasksContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-icon")) {
      const taskToDelete = event.target.closest(".task-container");
      if (taskToDelete) {
        taskToDelete.remove();
      }
    }
  });
}
function changeVar(variable, value) {
  document.documentElement.style.setProperty(variable, value);
}
themesIcon.onclick = () => {
  const isMoonIcon = themesIcon.src.includes("icons/icons8-moon-30.png");
  const testDelete = document.querySelector(".delete-icon");
  if (isMoonIcon) {
    themesIcon.src = "icons/icons8-sun-30.png";
    addIcon.src = "icons/icons8-add-30.png";

    changeVar("--color", "#ff5733");
    changeVar("--bgc", "#000000");
    changeVar("--sec-color", "#ffffff");

    updateDeleteIcons("icons/icons8-delete-60.png");
  } else {
    themesIcon.src = "icons/icons8-moon-30.png";
    addIcon.src = "icons/icons8-add-30-black.png";

    changeVar("--color", "#ff5733");
    changeVar("--bgc", "#ffffff");
    changeVar("--sec-color", "#000000");
    updateDeleteIcons("icons/icons8-delete-60-black.png");
  }
};

function updateDeleteIcons(src) {
  const deleteIcons = document.querySelectorAll(".delete-icon");
  deleteIcons.forEach((icon) => {
    icon.src = src;
  });
}
function updateAddButton() {
  if (window.matchMedia("(max-width: 460px)").matches) {
    addButton.innerHTML = `<img class="add-icon" src="icons/icons8-add-30-black.png" alt="" />`;
  } else {
    addButton.innerHTML = `<img class="add-icon" src="icons/icons8-add-30-black.png" alt="" /> add task`;
  }
}

updateAddButton();

window.addEventListener("resize", updateAddButton);
addButton.onclick = () => {
  addTask();
};
deleteTask();
