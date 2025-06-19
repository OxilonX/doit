const addButton = document.querySelector(".add-button");
const deleteButton = document.querySelector(".delete-icon");
const input = document.querySelector(".task-input");
let allTasks = [];
let tasksContainer = document.querySelector(".tasks-container");
let task = document.querySelector(".task-container");
let i = 0;
function addTask() {
  const taskContent = input.value.trim();

  if (taskContent) {
    i++;
    const taskHTML = ` <div class="task-container ">
            <div class="inset-task">
              <label class="checkbox">
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              <div class="task">${taskContent}</div>
            </div>

            <img
              src="icons/icons8-delete-60-black.png"
              alt=""
              class="delete-icon "
            />
          </div>`;

    allTasks.push(taskHTML);
    input.value = "";
    tasksContainer.innerHTML += taskHTML;
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
deleteTask();
addButton.onclick = () => {
  addTask();
};
