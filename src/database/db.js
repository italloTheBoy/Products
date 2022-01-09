require('dotenv').config()
const { MongoClient } = require('mongodb')

const uri = process.env.MONGODB_URI
const client = new MongoClient(uri)

async function connect () {
  try {
    await client.connect()
  }
  catch (err) {
    console.log(err)
  }
}

connect()

module.exports = client