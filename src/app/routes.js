const app = require('./app')
const weather = require('./controllers/weather')
const user = require('./controllers/user')

app.get('/api/weather', weather.index)

app.post('/users', user.create)
