const express = require('express');
const router = express.Router();
const productController = require('../controllers/prductController')


router.get('/', productController.getAllProducts)
router.get('/productoporId/:id', productController.getProdusctById)





module.exports = router
