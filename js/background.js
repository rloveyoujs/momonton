const background = document.querySelector("#background");
const IMG_NUMBER = 7;

function paintImage() {
  const img = new Image();
  const ranNum = Math.floor(Math.random() * IMG_NUMBER) + 1;

  img.src = `./images/${ranNum}.jpg`;

  background.appendChild(img);
}

function init() {
  paintImage();
}

init();
