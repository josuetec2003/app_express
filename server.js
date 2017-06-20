const express = require('express')
const app = express()
const PORT = 11003

app.set('view engine', 'pug')
app.use(express.static(__dirname + '/static'))

app.get('/', (req, res) => {	
	res.render('index.pug')
})

app.listen(PORT, (err) => {
	if (err)
		console.log('Error: ' + err)
	else
		console.log('Server started at port ' + PORT)
})
