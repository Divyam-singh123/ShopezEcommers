const express = require('express');
const { getProducts, getProductById, createProduct } = require('../controllers/productController');
const { protect, seller } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', protect, seller, createProduct);

module.exports = router;
