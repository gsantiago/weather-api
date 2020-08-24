const axios = require('axios')
const https = require('https');

const httpsAgent = new https.Agent({
  rejectUnauthorized: process.env.NODE_ENV === 'production'
})

module.exports = function api(params) {
  return axios({
    url: 'https://api.openweathermap.org/data/2.5/weather',
    params: {
      appid: process.env.OPEN_WEATHER_API_KEY,
      ...params
    },
    httpsAgent
  })
}
