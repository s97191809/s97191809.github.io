const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "5e80978e07f3f87b6a685601a7422323";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            city.innerText = data.name;
            weather.innerText = `${data
                .weather[0]
                .main}/ ${data
                .main
                .temp}℃`;
            console.log(data.weather);
            weatherSelect = data
                .weather[0]
                .main
            const image = new Image();
            if (weatherSelect === "Clear") {
                image.src = `weather/sun.png`; 
                image
                    .classList
                    .add("weather_icon"); 
                weather.innerText = `맑음/ ${data.main.temp}℃`;
                weather.appendChild(image);
            } else if (weatherSelect === "Clouds") {
                image.src = `weather/clouds.png`;
                image
                    .classList
                    .add("weather_icon"); 
                weather.innerText = `구름/ ${data.main.temp}℃`;
                weather.appendChild(image);
            } else if (weatherSelect === "Rain") {
                image.src = `weather/rain.png`; 
                image
                    .classList
                    .add("weather_icon");
                weather.innerText = `비/ ${data.main.temp}℃`;
                weather.appendChild(image);
            } else if (weatherSelect === "snow") {
                image.src = `weather/snow.png`; 
                image
                    .classList
                    .add("weather_icon"); 
                weather.innerText = `눈/ ${data.main.temp}℃`;
                weather.appendChild(image);
            } else if (weatherSelect === "wind") {
                image.src = `weather/wind.png`;
                image
                    .classList
                    .add("weather_icon"); 
                weather.innerText = `바람/ ${data.main.temp}℃`;
                weather.appendChild(image);
            }
        });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator
    .geolocation
    .getCurrentPosition(onGeoOk, onGeoError);