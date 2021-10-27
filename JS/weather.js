const API_KEY = "b6c24e7af822d486b7e85eef5d66d665";
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}'c`;
    });

}
function onGeoError(){
  alert("Can't find you. No weather for you")
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);