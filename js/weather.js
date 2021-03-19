const weather = document.querySelector("#weather");
const API_KEY = "23331ea6817053f7f0b6722549f4f60f";

function handleGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  ).then((res) => {
    res.json().then((data) => {
      const temp = data.main.temp;
      const name = data.name;

      weather.innerText = `${temp}℃ @ ${name}`;
    });
  });
}

function handleGeoFail() {
  console.log("Can't access geo location");
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoFail);
}

function init() {
  askForCoords();
}

init();
