const apiKey = '34a37e23f7b13413d266dd15e21f63f8'
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const cidade = document.querySelector('.cidade-input')

async function checkWeather(cidade) {
    const response = await fetch(apiUrl + encodeURIComponent(cidade) + "&appid=" + apiKey)
    const data = await response.json()

    document.querySelector('.cidade').innerHTML = data.name
    document.querySelector('.temperatura').innerHTML = Math.round(data.main.temp) + "  °C"
    document.querySelector('.umidade').innerHTML = data.main.humidity + "%"
    document.querySelector('.vento').innerHTML = Math.round(data.wind.speed) + "km/h"
    console.log(data)
}

try {
    searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value)
    console.log('funfou')
})
} catch (e) {
    
} 