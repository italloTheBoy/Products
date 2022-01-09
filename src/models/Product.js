const client = require('../database/db')


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
  
  static findAll() {
    return client.db().collection('products').find().toArray()
  }
}

module.exports = Product