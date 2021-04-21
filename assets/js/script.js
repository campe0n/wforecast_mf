var cities = [];
var savedCities = localStorage.getItem("cities");
var day = dayjs().format('(D/MM/YY)');
var search = document.querySelector('input').value.trim();
console.log(day);
console.log(cities);
function getApi() {
    var requestUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=38.883530&lon=-94.818237&exclude=hourly&appid=e347bd23cef3f3c3bd38b8b8011703ff'
    fetch(requestUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data)
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
        createButtons();
        displayDay();
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
    document.getElementById("city").innerHTML = search + day;
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

function displayDay(){
    
}
retrieveCities();
