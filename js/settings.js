const settingsModal = document.querySelector("#settingsModal");
const changeUserForm = settingsModal.querySelector("#changeUserForm");
const changeUserInput = changeUserForm.querySelector("input");
const settingsModalCloseButton = settingsModal.querySelector(".delete");
const settingsModalBackground = settingsModal.querySelector(
  ".modal-background"
);

function handleSettingsModalOpenClick(e) {
  settingsModal.classList.add("is-active");

  setTimeout(() => {
    changeUserInput.focus();
  }, 0);
}

function handleSettingsModalCloseClick() {
  settingsModal.classList.remove("is-active");

  changeUserInput.value = "";
}

function handleSettingsModalEscKeyUp(e) {
  if (e.key === "Escape") {
    handleSettingsModalCloseClick();
  }
}

function handleChangeUserSubmit(e) {
  e.preventDefault();

  localStorage.setItem("user", changeUserInput.value);

  userH1.innerText = `Hello, ${localStorage.getItem("user")}.`;

  changeUserInput.value = "";

  settingsModal.classList.remove("is-active");
}

function openSettingsModal(e) {
  settingsButton.addEventListener("click", handleSettingsModalOpenClick);
}

function closeSettingsModal(e) {
  settingsModalCloseButton.addEventListener(
    "click",
    handleSettingsModalCloseClick
  );
  settingsModalBackground.addEventListener(
    "click",
    handleSettingsModalCloseClick
  );
  document.body.addEventListener("keyup", handleSettingsModalEscKeyUp);
}

function changeUser() {
  changeUserForm.addEventListener("submit", handleChangeUserSubmit);
}

function init() {
  openSettingsModal();

  closeSettingsModal();

  changeUser();
}

init();
