var express = require('express')
var morgan = require('morgan')
var bodyParser = require('body-parser')

var admin = require('firebase-admin')

var serviceAccount = require('./first-2a4e8-firebase-adminsdk-g6835-262c6d3e02.json')

var firebaseAdmin = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://first-2a4e8.firebaseio.com'
})

var database = firebaseAdmin.database() // Instance of a database

var app = express()

app.use(morgan('dev'))

// We want to serve js and html in ejs
// ejs stands for embeded javascript
app.set('view engine', 'ejs')

// We also want to send css and images (static files.)

app.use(express.static('views'))
app.set('views', __dirname + '/views') // __dirname means directory we are currenty in, use that directory

// Give server excess to the user
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// Create authentication middleware

function isAuthenticated(request, response, next) {
  // check if user is logged in
  // if they are not send them to login page
  // if they are, attatch them to login page
  // with a message login
  next()
}

// Create instance of express app
app.get('/', function(request, response) {
  // ...response.send('<h1>Hello</h1>')
  var restrauntRef = database.ref("/restraunts")

  restrauntRef.once('value', function(snapshot) {
    var data = snapshot.val()
    if (!data) {
      data = {}
    }
    response.render('home.ejs', {restraunts: data})
  })
})

app.post('/login', function(request, response) {
  // Send back a page with yelled breakfast
  response.render('results.ejs')
})

var port = process.env.PORT || 8080

app.listen(port, function() {
  console.log('App running on ' + port)
})
