const express = require('express')
const app = express()
const PORT = 11003

app.set('view engine', 'pug')
app.use(express.static(__dirname + '/static'))

app.get('/', (req, res) => {
	var langs = ['C#', 'C++', 'Javascript', 'VB.Net', 'Python', 'PHP', 'HTML5/CSS3']	
	res.render('index.pug', {nombre: 'Josue', edad: 31, langs: langs})
})

app.listen(PORT, (err) => {
	if (err)
		console.log('Error: ' + err)
	else
		console.log('Server started at port ' + PORT)
})
