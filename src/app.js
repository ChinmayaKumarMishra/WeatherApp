const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const path = require('path')

// Create new instance of application
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 3000

// Define path for express config
const publicPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars enginrs and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicPath))

// Setup routers
app.get('', (req, res)=>{
	res.render('index', {
		title: 'Weather',
		name: 'Chinmaya'
	})
})
app.get('/help', (req, res)=>{
	res.render('help', {
		title: 'Help',
		name: 'Chinmaya',
		message: 'Support message'
	})
})
app.get('/about', (req, res)=>{
	res.render('about', {
		title: 'About Weather App',
		name: 'Chinmaya'
	})
})

// contacts.html will render contacts.html from public path
/*
app.get('/weather', (req, res)=>{
	if (!req.query.address) {
		return res.send({	
			error: 'No search query provided'
		}) 
	} 
	res.send({
		location: 'Bhadrak',
		forecast: 'It is very cold out there.',
		address: req.query.address
	})
	
})
*/

app.get('/weather', (req, res)=>{
	if (!req.query.address) {
		return res.send({	
			error: 'No search query provided'
		}) 
	} 
	
	geocode(req.query.address, (error, {latitude, longitude, location} = {})=> {
		
		if(error) {
			return res.send({ error }) 
		}

		forecast(latitude, longitude, (error, forecastdata)=> {
			if(error) {
				return res.send({ error }) 
			}
			
			res.send({
				location,
				weather_descriptions: forecastdata.weather_descriptions,
				address: req.query.address,
				temperature: forecastdata.temperature,
				humidity: forecastdata.humidity
			}) 
		})
	})
})

app.get('/help/*', (req, res)=>{
	res.render('error',{
		title: 'Error Page',	
		errorText: 'Help article not found.',
		name: 'Chinmaya'
	})
})

app.get('*', (req, res)=>{
	res.render('error',{
		title: 'Error Page',		
		errorText: 'Page not found.',
		name: 'Chinmaya'
	})
})

app.listen(port, ()=>{
	console.log('Server is up on port '+port)
})