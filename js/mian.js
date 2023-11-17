const API_KEY = "ca4be9013bb6f2f5d76e0bfd85f072c5";

const form = document.querySelector("#form");
const input = document.querySelector(".form__input");

form.onsubmit = submitHeander;

async function submitHeander(e) {
  e.preventDefault();

  if (!input.value.trim()) {
    console.log("Enter city name please");
    return;
  }

  const cityInfo = await getGeo(input.value.trim());

	const weatherInfo = await getWeather(cityInfo[0]["lat"], cityInfo[0]["lon"])
	console.log(weatherInfo)
}

async function getGeo(name) {
  const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=5&appid=${API_KEY}`;
  const response = await fetch(geoUrl);
  const data = await response.json();
  return data;
}

async function getWeather(lat, lon) {
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  const response = await fetch(weatherUrl);
  const data = await response.json();
  return data;
}
