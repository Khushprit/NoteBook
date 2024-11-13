const connectToMongo = require('./db')
const express = require('express')
var cors = require('cors')
const dotenv = require('dotenv')
connectToMongo()

const app = express()

//to use req.json a middleware is required

app.use(express.json())
app.use(cors())
//available routes
app.use('/api/auth', require('./routes/auth.js'))
app.use('/api/notes', require('./routes/notes.js'))

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on http://localhost:${process.env.PORT}`)
})
