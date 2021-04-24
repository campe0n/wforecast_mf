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

        document.getElementById('t1').innerHTML = "Temp: "+ JSON.stringify(data.daily[0].temp.day);
        document.getElementById('t1').setAttribute('style', 'color:white;');
        document.getElementById('w1').innerHTML = "Wind: "+ JSON.stringify(data.daily[0].wind_speed);
        document.getElementById('w1').setAttribute('style', 'color:white');
        document.getElementById('h1').innerHTML = "Humidity: "+JSON.stringify(data.daily[0].humidity);
        document.getElementById('h1').setAttribute('style', 'color: white');

        document.getElementById('t2').innerHTML = "Temp: "+ JSON.stringify(data.daily[1].temp.day);
        document.getElementById('t2').setAttribute('style', 'color:white;');
        document.getElementById('w2').innerHTML = "Wind: "+ JSON.stringify(data.daily[1].wind_speed);
        document.getElementById('w2').setAttribute('style', 'color:white');
        document.getElementById('h2').innerHTML = "Humidity: "+JSON.stringify(data.daily[1].humidity);
        document.getElementById('h2').setAttribute('style', 'color: white');

        document.getElementById('t3').innerHTML = "Temp: "+ JSON.stringify(data.daily[2].temp.day);
        document.getElementById('t3').setAttribute('style', 'color:white;');
        document.getElementById('w3').innerHTML = "Wind: "+ JSON.stringify(data.daily[2].wind_speed);
        document.getElementById('w3').setAttribute('style', 'color:white');
        document.getElementById('h3').innerHTML = "Humidity: "+JSON.stringify(data.daily[2].humidity);
        document.getElementById('h3').setAttribute('style', 'color: white');

        document.getElementById('t4').innerHTML = "Temp: "+ JSON.stringify(data.daily[3].temp.day);
        document.getElementById('t4').setAttribute('style', 'color:white;');
        document.getElementById('w4').innerHTML = "Wind: "+ JSON.stringify(data.daily[3].wind_speed);
        document.getElementById('w4').setAttribute('style', 'color:white');
        document.getElementById('h4').innerHTML = "Humidity: "+JSON.stringify(data.daily[3].humidity);
        document.getElementById('h4').setAttribute('style', 'color: white');

        document.getElementById('t5').innerHTML = "Temp: "+ JSON.stringify(data.daily[4].temp.day);
        document.getElementById('t5').setAttribute('style', 'color:white;');
        document.getElementById('w5').innerHTML = "Wind: "+ JSON.stringify(data.daily[4].wind_speed);
        document.getElementById('w5').setAttribute('style', 'color:white');
        document.getElementById('h5').innerHTML = "Humidity: "+JSON.stringify(data.daily[4].humidity);
        document.getElementById('h5').setAttribute('style', 'color: white');
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