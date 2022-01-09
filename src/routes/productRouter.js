const ProductController = require('../controllers/ProductController')
const router = require('express').Router()


router.get('/new', ProductController.newProductForm)
router.post('/new', ProductController.newProductSave)

router.get('/', ProductController.readAllProducts)


module.exports = router