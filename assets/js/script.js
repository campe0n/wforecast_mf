var cities = [];

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
    }
}

function createButtons(){
    document.querySelector('#btnsContainer').innerHTML = '';
    for(i=0; i<cities.length; i++) {
    var button = document.createElement('button');
    var text = document.createTextNode(cities[i]);
    button.appendChild(text);
    document.querySelector('#btnsContainer').appendChild(button);
    button.setAttribute('style', 'text-align: center; margin: 2% 0 2% 2%; width: 94%; height; 20%; background-color: #B7B7B7; color: black;');
    }
}

function init(){

}