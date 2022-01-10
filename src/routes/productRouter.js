const ProductController = require('../controllers/ProductController')
const router = require('express').Router()


router.get('/new', ProductController.newProductForm)
router.post('/new', ProductController.newProductSave)

router.get('/', ProductController.readAllProducts)
router.get('/select/:id', ProductController.readOneProduct)

router.get('/edit/:id', ProductController.editProductForm)
router.post('/edit', ProductController.editProductSave)

router.get('/delete/:id', ProductController.deleteOneProduct)


module.exports = router