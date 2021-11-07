function getdetails(place){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=736412f27570e2880986e590ae7278fc`)
    .then(res => res.json())//here res is for response and it is converting into json format so that browser can understand
    .then(result => document.getElementById("name").innerHTML = result.name)

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=736412f27570e2880986e590ae7278fc`)
    .then(res => res.json())//here res is for response and it is converting into json format so that browser can understand
    .then(result => document.getElementById("temp").innerHTML = parseInt(result.main.temp-273.15+"°C"))

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=736412f27570e2880986e590ae7278fc`)
    .then(res => res.json())//here res is for response and it is converting into json format so that browser can understand
    .then(result => document.getElementById("wind").innerHTML = result.wind.speed)

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=736412f27570e2880986e590ae7278fc`)
    .then(res => res.json())//here res is for response and it is converting into json format so that browser can understand
    .then(result => document.getElementById("lon").innerHTML = parseInt(result.coord.lon)+"th")

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=736412f27570e2880986e590ae7278fc`)
    .then(res => res.json())//here res is for response and it is converting into json format so that browser can understand
    .then(result => document.getElementById("humi").innerHTML = result.main.humidity+"%")

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=736412f27570e2880986e590ae7278fc`)
    .then(res => res.json())//here res is for response and it is converting into json format so that browser can understand
    .then(result => document.getElementById("lat").innerHTML = parseInt(result.coord.lat)+"th")
}

function getPlace(){
    var place = document.getElementById("inputPlace").value
    console.log(place)
    getdetails(place)
}