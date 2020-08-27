const database = require('../database')

module.exports = {
  async create (req, res) {
    try {
      await database.connect()
      const user = await database.createUser(req.body)
      res.json(user)
    } catch (err) {
      res.statusCode = 500
      res.send(err.message)
    } finally {
      await database.close()
    }
  }
}
