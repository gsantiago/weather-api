const database = require('../database')

module.exports = {
  async create (req, res) {
    try {
      await database.connect()
      const user = await database.createUser(req.body)
      res.json(user)
    } catch (err) {
      next(err)
    } finally {
      await database.close()
    }
  }
}
