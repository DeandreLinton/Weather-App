const app = {
init: () =>{
    document
    .getElementById('button')
    .addEventListener('click',app.fetchWeather);
    document
    .getElementById('btnCurrent')
    .addEventListener('click', app.getLocation);
},

fetchWeather: (ev) =>{
    let lat = document.getElementById('latitude').value;
    let lon = document.getElementById('longitude').value;
    let key = 'dfa89fab3c8cc045680577b765440bd8';
    let lang = 'en'
    let units = 'metric';
    let url = 'https://api.openweathermap.org/data/2.5/weather?';

},
getLocation: (ev) =>{
    let opts = {
        enableHighAccuracy: true,
        timeout: 1000 * 10, //10 seconds
        maximumAge: 1000 * 60 * 5, //5 minutes
    };
    navigator.geolocation.getCurrentPosition(app.ftw, app.wtf, opts);
},
ftw: (position) => {

},
wtf: (err) => {

},
showWeather: (resp) => {

},

};
app.init();