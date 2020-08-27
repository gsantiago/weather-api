const axios = require('axios')
const https = require('https')

const httpsAgent = new https.Agent({
  rejectUnauthorized: process.env.NODE_ENV === 'production'
})

module.exports = {
  async index (req, res) {
    try {
      const { data } = await axios({
        url: 'https://api.openweathermap.org/data/2.5/weather',
        params: {
          appid: process.env.OPEN_WEATHER_API_KEY,
          ...req.query
        },
        httpsAgent
      })
      res.json(data)
    } catch (err) {
      res.statusCode = 500
      res.send(err.message)
    }
  }
}
