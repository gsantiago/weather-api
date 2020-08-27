require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const api = require('./api')
const database = require('./database')

const app = express()

app.use(bodyParser.json())

app.get('/api/weather', async (req, res) => {
  try {
    const { data } = await api(req.query)
    res.json(data)
  } catch (err) {
    res.statusCode = 500
    res.send(err.message)
  }
})

app.post('/users', async (req, res) => {
  try {
    await database.connect()
    const user = await database.createUser(req.body)
    res.json(user)
    await database.close()
  } catch (err) {
    res.statusCode = 500
    res.send(err.message)
  }
})

app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`)
})
