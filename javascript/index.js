// Vilnius
setInterval(function () {
  let vilniusDate = document.querySelector("#vilnius .date");

  let vilniusTime = document.querySelector("#vilnius .time");
  let vilniusTimeFormat = moment().tz("Europe/Vilnius");
  vilniusDate.innerHTML = vilniusTimeFormat.format("MMMM Do, YYYY");
  vilniusTime.innerHTML = `${vilniusTimeFormat.format(
    "h:mm:ss"
  )} <small>${vilniusTimeFormat.format("A")}</small>`;
}, 1000);

// Oslo
setInterval(function () {
  let osloDate = document.querySelector("#oslo .date");

  let osloTime = document.querySelector("#oslo .time");
  let osloTimeFormat = moment().tz("Europe/oslo");
  osloDate.innerHTML = osloTimeFormat.format("MMMM Do, YYYY");
  osloTime.innerHTML = `${osloTimeFormat.format(
    "h:mm:ss"
  )} <small>${osloTimeFormat.format("A")}</small>`;
}, 1000);

// Buenos Aires
setInterval(function () {
  let buenosAiresDate = document.querySelector("#buenos-aires .date");

  let buenosAiresTime = document.querySelector("#buenos-aires .time");
  let buenosAiresTimeFormat = moment().tz("America/Argentina/Buenos_Aires");
  buenosAiresDate.innerHTML = buenosAiresTimeFormat.format("MMMM Do, YYYY");
  buenosAiresTime.innerHTML = `${buenosAiresTimeFormat.format(
    "h:mm:ss"
  )} <small>${buenosAiresTimeFormat.format("A")}</small>`;
}, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let allCities = document.querySelector("#all-cities");
  allCities.innerHTML = `
     <div class="container city">
        <div><h2>${cityName}</h2></div>
        <div>
          <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )}<small>${cityTime.format(" A")}</small></div>
        </div>
      </div>
    </div>
    <a href="/">Go back to all cities</a>`;
}

let citySelect = document.querySelector("#city-select");
citySelect.addEventListener("change", updateCity);
