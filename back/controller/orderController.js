const orders = require('../models/orders')
const config = require('../config/default.json')
const stripe = require('stripe')(config.stripeKey);

module.exports.getOrders = (req,res) => {

}

module.exports.checkout =async (req,res) => {
    console.log(req.params)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: 1000,
        currency: 'usd',
        payment_method_types: ['card'],
        receipt_email: 'jenny.rosen@example.com',
      });
    console.log(paymentIntent)
    res.json(paymentIntent)
}