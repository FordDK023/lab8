const express = require('express');
const router = express.Router();
const controller = require('../controllers/products.controller');

router.get('/add', controller.addProductPage);
router.post('/add', controller.addProduct);
router.get('/edit/:id', controller.editProductPage);
router.post('/edit/:id', controller.editProduct);
router.get('/delete/:id', controller.deleteProduct);

module.exports = router;