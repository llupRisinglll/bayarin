const express = require('express')
const app = express()
const port = 3000

import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()


app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.listen(port, () => {


	console.log(`Example app listening on port ${port}`)
})