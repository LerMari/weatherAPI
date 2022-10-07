//alert("connected");

document.getElementById("btn").addEventListener("click", getForecast);

const results = document.getElementById("results");

const url="https://api.openweathermap.org/data/2.5/weather?appid=2085d3c9972fa661e949980abea9ea10&units=imperial&zip=94040";

fetch(url)
.then(response => response.json())
.then(data => {
    console.log(data.name);
    console.log(data.main.temp);
    console.log(data.weather[0].description);
})

function getForecast() {
    console.log("clicked");
    const endpoint = "https://api.openweathermap.org/data/2.5/weather?appid=2085d3c9972fa661e949980abea9ea10&units=imperial&zip=";
    
    let zipcode = document.getElementById("zipcode").value ;

    console.log("zipcode is " + zipcode);

    let newUrl = `${endpoint}${zipcode}`;

    console.log(newUrl);

    fetch(newUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data.name);
        console.log(data.main.temp);
        console.log(data.weather[0].description);
        results.innerHTML = `<h3>City:</h3> ${data.name}`;
        results.innerHTML += `<h3>Current Temperature:</h3> ${data.main.temp}&deg;F`;
        results.innerHTML += `<h3>Condition:</h3> ${data.weather[0].description}`;
})
}