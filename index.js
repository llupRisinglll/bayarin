const express = require('express')
const app = express()
const port = 3000

// load dotenv
require('dotenv').config()


app.get('/', (req, res) => {

	const Cat = mongoose.model('Cat', {
		name: String 
	});

	const kitty = new Cat({ name: 'Zildjian' });
	kitty.save().then(() => console.log('meow'));

	res.send('Hello World!')
})


const mongoose = require('mongoose');

// connect to the database
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true});


app.listen(port, () => {

	console.log(`Example app listening on port ${port}`)
})