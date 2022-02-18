require('dotenv').config()
const express = require('express')
const app = express()
// MIDDLEWARE
// app.set('views', __dirname + '/views')
// app.set('view engine', 'jsx')
// app.engine('jsx', require('express-react-views').createEngine())

app.use('/places',require('./controllers/places'))
app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('*', (req, res) => {
    res.status(404).send('404 Page')
})

app.listen(process.env.PORT)