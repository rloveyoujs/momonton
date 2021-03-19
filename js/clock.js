const clock = document.querySelector("#clock");

function getTime() {
  const date = new Date();
  const hour = date.getHours();
  const minutes = date.getMinutes();

  clock.innerText = `${hour} : ${minutes < 10 ? `0${minutes}` : minutes}`;
}

function init() {
  getTime();
}

init();
