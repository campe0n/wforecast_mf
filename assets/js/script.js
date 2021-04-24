var cities = [];
var savedCities = localStorage.getItem("cities");
var day = dayjs().format('(D/MM/YY)');
var search = document.querySelector('input').value.trim();
console.log(day);

function onelocation() {
    var search = document.querySelector('input').value.trim();
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?units=imperial&q=' + search +'&appid=35f55e88a2361c526b9d9dfd2f2e3074'

    fetch(requestUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data)
        document.getElementById('temp').innerHTML = "Temp: "+ data.main.temp+"F";
        document.getElementById('wind').innerHTML = "Wind  "+data.wind.speed+" MPH";
        document.getElementById('humidity').innerHTML = "Humidity:  "+data.main.humidity+" %";
    })
}

function get5day(){
    var search = document.querySelector('input').value.trim();
    var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q='+search+'&units=imperial&appid=35f55e88a2361c526b9d9dfd2f2e3074'

    fetch(requestUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data)
        //document.getElementById('uvi').innerHTML = "UV Index:  "+data.current.uvi;   

        //target every 8th item
        document.getElementById('t1').innerHTML = "Temp: "+ data.list[0].main.temp+' F';
        document.getElementById('t1').setAttribute('style', 'color:white;');
        document.getElementById('w1').innerHTML = "Wind: "+ data.list[0].wind.speed+' MPH';
        document.getElementById('w1').setAttribute('style', 'color:white');
        document.getElementById('h1').innerHTML = "Humidity: "+ data.list[0].main.humidity+' %';
        document.getElementById('h1').setAttribute('style', 'color: white');

        document.getElementById('t2').innerHTML = "Temp: "+ data.list[7].main.temp+' F';
        document.getElementById('t2').setAttribute('style', 'color:white;');
        document.getElementById('w2').innerHTML = "Wind: "+ data.list[7].wind.speed+' MPH';
        document.getElementById('w2').setAttribute('style', 'color:white');
        document.getElementById('h2').innerHTML = "Humidity: "+ data.list[7].main.humidity+' %';
        document.getElementById('h2').setAttribute('style', 'color: white');

        document.getElementById('t3').innerHTML = "Temp: "+ data.list[15].main.temp+' F';
        document.getElementById('t3').setAttribute('style', 'color:white;');
        document.getElementById('w3').innerHTML = "Wind: "+ data.list[15].wind.speed+' MPH';
        document.getElementById('w3').setAttribute('style', 'color:white');
        document.getElementById('h3').innerHTML = "Humidity: "+ data.list[15].main.humidity+' %';
        document.getElementById('h3').setAttribute('style', 'color: white');

        document.getElementById('t4').innerHTML = "Temp: "+ data.list[23].main.temp+' F';
        document.getElementById('t4').setAttribute('style', 'color:white;');
        document.getElementById('w4').innerHTML = "Wind: "+ data.list[23].wind.speed+' MPH';
        document.getElementById('w4').setAttribute('style', 'color:white');
        document.getElementById('h4').innerHTML = "Humidity: "+ data.list[23].main.humidity+' %';
        document.getElementById('h4').setAttribute('style', 'color: white');

        document.getElementById('t5').innerHTML = "Temp: "+ data.list[35].main.temp+' F';
        document.getElementById('t5').setAttribute('style', 'color:white;');
        document.getElementById('w5').innerHTML = "Wind: "+ data.list[35].wind.speed+' MPH';
        document.getElementById('w5').setAttribute('style', 'color:white');
        document.getElementById('h5').innerHTML = "Humidity: "+ data.list[35].main.humidity+' %';
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
        onelocation();
        get5day();
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