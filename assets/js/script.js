var cities = [];
var savedCities = localStorage.getItem("cities");
var day = dayjs().format('(D/MM/YY)');
var search = document.querySelector('input').value.trim();
console.log(day);
function getApi() {
    var requestUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=38.883530&lon=-94.818237&units=imperial&appid=35f55e88a2361c526b9d9dfd2f2e3074'
    //var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + search +'&appid=35f55e88a2361c526b9d9dfd2f2e3074'

    fetch(requestUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data)
        document.getElementById('temp').innerHTML = "Temp: "+ data.current.temp+"F";
        document.getElementById('wind').innerHTML = "Wind  "+data.current.wind_speed+" MPH";
        document.getElementById('humidity').innerHTML = "Humidity:  "+data.current.humidity+" %";
        document.getElementById('uvi').innerHTML = "UV Index:  "+data.current.uvi;   
    })
}

function formSubmitHandler() {
    var search = document.querySelector('input').value.trim();
    if(cities.includes(search)){
        return;
    } else if (search === ''){
        return;
    } else{
        cities.push(search);
        console.log(cities);
        document.querySelector('h3').innerHTML = search + '        ' + day;
        createButtons();
        getApi();
    }
}

function createButtons(){
    document.getElementById('btnsContainer').innerHTML = '';
    for(i=0; i<cities.length; i++) {
    var button = document.createElement('button');
    var text = document.createTextNode(cities[i]);
    button.appendChild(text);
    document.getElementById('btnsContainer').appendChild(button);
    button.setAttribute('style', 'text-align: center; margin: 2% 0 2% 2%; width: 94%; height; 20%; background-color: #B7B7B7; color: black;');
    localStorage.setItem("cities", JSON.stringify(cities));
    }
}

function retrieveCities(){ 
    var retrieveData = localStorage.getItem("cities");
    var parseData = JSON.parse(retrieveData);
    if(parseData !== null){
        for(i=0;i<parseData.length;i++){
            var btn = document.createElement('button');
            var txt = document.createTextNode(parseData[i]);
            btn.appendChild(txt);
            document.querySelector('#btnsContainer').appendChild(btn);
            btn.setAttribute('style', 'text-align: center; margin: 2% 0 2% 2%; width: 94%; height; 20%; background-color: #B7B7B7; color: black;');
        }
    }
}

retrieveCities();