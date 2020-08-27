const { Client } = require('pg')

const client = new Client({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS
})

module.exports = {
  async connect () {
    await client.connect()
  },
  async close () {
    await client.close()
  },
  async createUser({ email, password }) {
    const query = `
      INSERT INTO users VALUES(
        DEFAULT,
        $1,
        $2,
        NOW(),
        NOW()
      ) RETURNING *
    `

    const response = await client.query(query, [email, password])

    return response.rows[0]
  }
}
