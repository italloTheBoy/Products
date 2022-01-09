const express = require('express')
const hbs = require('express-handlebars')
const path = require('path')
require('dotenv').config()   
const db = require('./database/db')
const productRouter = require('./routes/productRouter') 


const app = express()

app.engine('handlebars', hbs.engine())
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.use('/products', productRouter)


const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`\nServer is running in http://localhost:${port}/products\n`)
})