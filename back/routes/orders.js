const express = require('express')
const router = express.Router()
const orderController = require('../controller/orderController')

router.get('/orders/:id',orderController.getOrders)
router.post('/orders/:id',orderController.checkout)

module.exports = router