const userForm = document.querySelector("#userForm");
const userInput = userForm.querySelector("input");
const userH1 = document.querySelector("#user");
const settingsButton = document.querySelector("#settingsButton");
const toDosButton = document.querySelector("#toDosButton");

function paintUser(user) {
  userForm.classList.add("is-hidden");
  userH1.classList.remove("is-hidden");
  settingsButton.classList.remove("is-hidden");
  toDosButton.classList.remove("is-hidden");

  userH1.innerText = `Hello, ${user}.`;
}

function handleUserFormSubmit(e) {
  e.preventDefault();

  paintUser(userInput.value);

  localStorage.setItem("user", userInput.value);
}

function setUser() {
  userForm.addEventListener("submit", handleUserFormSubmit);
}

function init() {
  const loadUser = localStorage.getItem("user");

  if (loadUser === null) {
    userForm.classList.remove("is-hidden");

    setTimeout(() => {
      userInput.focus();
    }, 0);

    setUser();
  } else {
    paintUser(loadUser);
  }
}

init();
