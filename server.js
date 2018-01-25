var express = require('express')
var morgan = require('morgan')
var app = express()

app.use(morgan('dev'))

// Create instance of express app
app.get('/', function(request, response) {
  // ...response.send('<h1>Hello</h1>')
  response.render('home.ejs')
})

//We want to serve js and html in ejs
//ejs stands for embeded javascript
app.set('view engine', 'ejs')

//We also want to send css and images (static files.)

app.use(express.static('views'))
app.set('views', __dirname + '/views') // __dirname means directory we are currenty in, use that directory

var port = process.env.PORT || 8080

app.listen(port, function() {
  console.log('App running on ' + port)
})
