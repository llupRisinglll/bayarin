const express = require('express')
const app = express()
const port = 3000

// load dotenv
require('dotenv').config()


app.get('/', (req, res) => {
	const Calendar = mongoose.model('BayarinCalendar', {
		name: String 
	});

	const calendar_entry = new Calendar({ 
		title: 'Zildjian',
		date: '2019-01-01',
		amount: 1000,
		notes: 'test' 
	});

	calendar_entry.save().then(() => console.log('meow'));

	res.send('Hello World!')
})


const mongoose = require('mongoose');

// connect to the database
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true});


app.listen(port, () => {

	console.log(`Example app listening on port ${port}`)
})