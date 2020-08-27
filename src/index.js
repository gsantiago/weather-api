const app = require('./app')
const { errorHandler } = require('./middlewares/error-handler')

require('./routes')

app.use(errorHandler)

app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`)
})
