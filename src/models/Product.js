const client = require('../database/db')
const { ObjectId } = require('mongodb')


class Product {

  constructor(name, image, price, description) {

    this.name = name
    this.image = image
    this.price = price
    this.description = description

  }

  async save() {

    try {

      return client.db().collection('products').insertOne({

        name: this.name,
        image: this.image,
        price: this.price,
        description: this.description,

      })

    }
    catch (err) {
      console.log(err)
    }

  }
  
  static async findAll() {
    return client.db().collection('products').find().toArray()
  }

  static async findById(id) {
    return client.db().collection('products').findOne({ _id: ObjectId(id) })
  }

  async updateById(id) {
    return client.db().collection('products').updateOne({ _id: ObjectId(id) }, { $set: this })
  }

  static async deleteById(id) {
    return client.db().collection('products').deleteOne({ _id: ObjectId(id) })
  }
}

module.exports = Product