const Product = require('../models/Product')


class ProductController {

  static newProductForm(req, res) {
    res.render('products/newProduct')
  }

  static async newProductSave(req, res) {

    const { name, image, price, description } = req.body

    const product = new Product(name, image, price, description)

    await product.save()

    res.redirect('/products')
  }


  static async readAllProducts(req, res) {

    const products = await Product.findAll()

    res.render('products/showAll', { products })
  }

}


module.exports = ProductController