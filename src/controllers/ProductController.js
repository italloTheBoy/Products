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


  static async readOneProduct(req, res) {

    const { id } = req.params

    const product = await Product.findById(id)

    res.render('products/showOne', { product })
  }


  static async editProductForm(req, res) {
      
    const { id } = req.params

    const product = await Product.findById(id)

    res.render('products/editProduct', { product })
  }


  static async editProductSave(req, res) {
      
    const { id, name, image, price, description } = req.body

    const product = new Product(name, image, price, description)

    await product.updateById(id)

    res.redirect('/products')
  }


  static async deleteOneProduct(req, res) {

    const { id } = req.params

    await Product.deleteById(id)

    res.redirect('/products')
  }
}


module.exports = ProductController