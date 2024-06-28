const express = require('express');
const router = express.Router();
const {getProducts, getProduct, updateProduct, deleteProduct, createProducts} = require('../controller/product.controller.js')



router.get('/', getProducts)

router.get('/:id', getProduct)

router.post('/', createProducts)

router.put('/:id', updateProduct)

router.delete('/:id', deleteProduct)

module.exports = router;