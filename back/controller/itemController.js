const items = require("../models/items");

module.exports.getItems = (req, res) => {
  items
    .find()
    .then((r) => {
      res.json(r);
    })
    .catch((e) => {
      res.status(400).json({ msg: "error while fetching" });
    });
};

module.exports.addItem = (req, res) => {
  const { title, desc, price } = req.body;
  console.log(title, desc, price);
  const item = new items({
    title: title,
    description: desc,
    price: price,
  });
  item
    .save()
    .then((r) => {
      res.send(r);
    })
    .catch((e) => res.status(400).send(e));
};

module.exports.deleteItem = (req, res) => {
  const _id = req.params.itemId;
  items
    .findByIdAndDelete({ _id })
    .then((r) => {
      if (!r) {
        res.send("Item Not Found");
      } else {
        res.send(r.title, "Deleted Successfully");
      }
    })
    .catch((e) => res.status(400).send("Error"));
};
