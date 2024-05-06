const express = require('express')
const { engine } = require('express-handlebars')
const router = require('./Routes/user')
const session = require('express-session');
require('dotenv').config()


const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

const PORT = process.env.PORT || 3000;

app.use(express.static('public'))

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

app.use(session({
    secret: process.env.SESSION,
    resave: false,
    saveUninitialized: false
}));


app.use('/', router)

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})