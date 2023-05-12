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
