const body = document.querySelector('body');
const cityName = document.getElementById('name') ;
const button = document.getElementById('btn');
const p = document.getElementById("cityname")
const weatherOfCity = () => { 
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=5fe4018a92c508bb531be713911b9df3`)
.then(response => response.json())
.then(data => {console.log(data)

const h1 = document.getElementById('city')
h1.innerHTML = ` City name : ${data.name}`
body.appendChild(h1)
const h2 = document.getElementById('temp')
h2.innerHTML = ` Temperature : ${Math.round(data.main.temp-273.15)} celsius`
body.appendChild(h2)
 const weatherIcon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
 const img = document.getElementById("image")
 img.src = weatherIcon
 body.appendChild(img)
 const windSpeed = document.getElementById("wind")
 windSpeed.innerHTML = ` Wind speed : ${data.wind.speed}`
 body.appendChild(windSpeed)
 const description = document.getElementById("cloudy")
 description.innerHTML = `  How clowdy it is : ${data.weather[0].description}`
 body.appendChild(description)
 let unix = `${data.sys.sunrise}`
let sunrise = new Date(unix*1000)
const sunRise = document.getElementById("rise")
sunRise.innerHTML = "sunrise : " + sunrise.toLocaleTimeString()
body.appendChild(sunRise)
  
let unit = `${data.sys.sunset}`
let sunset = new Date(unit*1000)
const sunSet = document.getElementById("set")
sunSet.innerHTML = "sunset : " + sunset.toLocaleTimeString()
body.appendChild(sunSet)
})
}
button.addEventListener('click' , weatherOfCity)
