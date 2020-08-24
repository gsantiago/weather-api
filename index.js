require('dotenv').config()
const express = require('express')
const api = require('./api')

const app = express()

app.get('/api', async (req, res) => {
  try {
    const { data } = await api(req.query)
    res.json(data)
  } catch (err) {
    res.statusCode = 500
    res.send(err.message)
  }
})

app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`)
})
