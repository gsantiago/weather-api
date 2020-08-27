const { Client } = require('pg')
const sql = require('sql-tag')

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
  async createUser ({ email, password }) {
    const query = sql`
      INSERT INTO users VALUES(
        DEFAULT,
        ${email},
        ${password},
        NOW(),
        NOW()
      ) RETURNING *
    `

    const response = await client.query(query)

    return response.rows[0]
  }
}
