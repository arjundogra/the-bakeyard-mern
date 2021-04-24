const Mongoose = require("mongoose");

const items = new Mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  date_added: {
    type: Date.UTC,
    default: Date.now,
  },
});

module.exports('item',items)