const toDosModal = document.querySelector("#toDosModal");
const toDosForm = toDosModal.querySelector("#toDosForm");
const toDosInput = toDosForm.querySelector("input");
const toDosModalCloseButton = toDosModal.querySelector(".delete");
const toDosModalBackground = toDosModal.querySelector(".modal-background");
const toDosList = toDosModal.querySelector("#toDosList");
const nullToDos = toDosModal.querySelector("#nullToDos");

let toDos = [];
let key = 1;

function handleToDosModalOpenClick(e) {
  toDosModal.classList.add("is-active");

  setTimeout(() => {
    toDosInput.focus();
  }, 0);
}

function handleToDosModalCloseClick(e) {
  toDosModal.classList.remove("is-active");

  toDosInput.value = "";
}

function handleToDosModalEscKeyUp(e) {
  if (e.key === "Escape") {
    handleToDosModalCloseClick();
  }
}

function handleToDosFormSubmit(e) {
  e.preventDefault();

  nullToDos.classList.add("is-hidden");

  const item = {
    id: key,
    value: toDosInput.value,
  };

  paintToDosList(item);

  localStorage.setItem("toDos", JSON.stringify(toDos));

  toDosInput.value = "";
}

function handleDeleteClick(e) {
  toDosList.removeChild(e.currentTarget.parentNode.parentNode);

  toDos.splice(Number(e.currentTarget.getAttribute("id")) - 1, 1);

  toDos = toDos.map((item, a) => {
    if (item.id !== a + 1) {
      item.id = a + 1;
    }

    return item;
  });

  localStorage.setItem("toDos", JSON.stringify(toDos));

  toDos = JSON.parse(localStorage.getItem("toDos"));

  if (toDos.length === 0) {
    nullToDos.classList.remove("is-hidden");
  }
}

function paintToDosList(item) {
  const li = document.createElement("li");
  const toDoText = document.createElement("span");
  const deleteButton = document.createElement("button");

  toDoText.innerText = item.value;

  toDoText.classList.add("tag");
  deleteButton.classList.add("delete");
  deleteButton.classList.add("is-small");
  deleteButton.classList.add("has-background-danger");

  deleteButton.setAttribute("id", item.id);

  deleteButton.addEventListener("click", handleDeleteClick);

  toDoText.appendChild(deleteButton);
  li.appendChild(toDoText);
  toDosList.appendChild(li);

  toDos.push(item);

  key++;
}

function openToDosModal() {
  toDosButton.addEventListener("click", handleToDosModalOpenClick);
}

function closeToDosModal() {
  toDosModalCloseButton.addEventListener("click", handleToDosModalCloseClick);
  toDosModalBackground.addEventListener("click", handleToDosModalCloseClick);

  document.body.addEventListener("keyup", handleToDosModalEscKeyUp);
}

function setToDos() {
  toDosForm.addEventListener("submit", handleToDosFormSubmit);
}

function init() {
  openToDosModal();

  closeToDosModal();

  setToDos();

  const loadToDos = JSON.parse(localStorage.getItem("toDos"));

  if (loadToDos !== null && loadToDos.length !== 0) {
    loadToDos.map((item) => paintToDosList(item));
  } else {
    nullToDos.classList.remove("is-hidden");
  }
}

init();
