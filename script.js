const apiKey = "145a7d62c29009acad9194284a12e9a6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const icon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`); // we are using async and await because we 
    if (response.status == 404) {                  // we dont want to execute the code before getting data from api
        document.querySelector(".error").style.display = "block";// await --> hm intezaar kr rhe hai ki jb daTA AAJAE API SE TB HM NICHE KE SARE CODE KO EXECUTE HONE DE
        document.querySelector(".weather").style.display = "none";
    }
    else {
        document.querySelector(".error").style.display = "none";
        var data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        if (data.weather[0].main == 'Clouds') {
            icon.setAttribute("src", "./images/clouds.png");
            // we can also write icon.src="./images/clouds.png" ;
        }
        else if (data.weather[0].main == 'Clear') {
            icon.setAttribute("src", "./images/clear.png");
        }
        else if (data.weather[0].main == 'Snow') {
            icon.setAttribute("src", "./images/snow.png");
        }
        else if (data.weather[0].main == 'Rain') {
            icon.setAttribute("src", "./images/rain.png");
        }
        else if (data.weather[0].main == 'Drizzle') {
            icon.setAttribute("src", "./images/Drizzle.png");
        }
        else if (data.weather[0].main == 'Mist') {
            icon.setAttribute("src", "./images/mist.png");
        }
        document.querySelector(".weather").style.display = "block";
    }
}

searchBtn.addEventListener("click", function () {
    console.log(searchBox.value);
    checkWeather(searchBox.value);
    if (searchBox.value === '')
        alert("Enter a city!!");
})

document.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        if (searchBox.value === '')
            alert("Enter a city!!");
        else
            checkWeather(searchBox.value);
    }
})

