console.log('Client side javascript file is loaded!')
/*
fetch('http://puzzle.mead.io/puzzle').then((response) => {
	response.json().then((data) => {
		console.log(data)
	})
})
*/

// for error try 'http://localhost:3000/weather?address=!'


const weatherForm = document.querySelector('#weatherSearchForm')
const searchText = document.querySelector('#searchText')
const locationText = document.querySelector('#location')
const forecastText = document.querySelector('#forecast')

weatherForm.addEventListener('submit', (event) => {
	event.preventDefault()// prevents reloading
	//const url ='http://localhost:3000/weather?address='+searchText.value
	const url ='/weather?address='+searchText.value // running on heroku
	
	locationText.textContent = 'Loading...'
	forecastText.textContent = ''
				
	fetch(url).then((response) => {
		response.json().then((data) => {
			if(data.error) {
				//console.log(data.error)
				locationText.textContent = data.error
				//forecastText.textContent = ''
			} else {
				forecastText.textContent = data.weather_descriptions + '. It is currently ' + data.temperature + ' degress out and humidity is ' + data.humidity+ '.'
				locationText.textContent = data.location
				//console.log(data.location, data.forecast)
			}
		})
	})
})