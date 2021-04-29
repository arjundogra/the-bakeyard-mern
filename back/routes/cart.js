const { Router } = require("express");
const cartController = require('../controller/cartControlller')
const router = Router()

router.get('/cart/:id',cartController.getItems)
router.post('/cart/:id',cartController.addCartItem)
router.delete('/cart/:id',cartController.delItem)

module.exports = router