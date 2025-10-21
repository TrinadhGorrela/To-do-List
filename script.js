const taskInput = document.getElementById("taskInput");
document.getElementById("addTask").addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});

function addTask() {
  const taskTest = taskInput.value.trim();
  if (taskTest === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
  <span>${taskTest}</span>
  <div class=""> 
   <button class="complete">✔</button>
   <button class="edit">✏</button>
   <button class="delete">✖</button>
   </div>
  `;
  const allTasks = document.querySelectorAll("#taskList span");
  for (let t of allTasks) {
    if (t.textContent === taskTest) {
      alert("Task already Exist");
      return;
    }
  }

  const completeBtn = li.querySelector(".complete");
  const editBtn = li.querySelector(".edit");
  const deleteBtn = li.querySelector(".delete");
  const span = li.querySelector("span");

  completeBtn.addEventListener("click", () => {
    const isComplete = span.style.textDecoration === "line-through";
    span.style.textDecoration = isComplete ? "none" : "line-through";
    span.style.color = isComplete ? "black" : "gray";
  });

  editBtn.addEventListener("click", () => {
    const newTest = prompt("Edit your Task:", span.textContent);
    if (newTest) span.textContent = newTest;
  });

  deleteBtn.addEventListener("click", () => li.remove());

  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}
