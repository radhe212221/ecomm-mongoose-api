const { cart } = require("../models");
function addRoute(req, res, next) {
  let uid = req.uid;
  let {
    pid,
    name,
    email,
    phone,
    password,
    title,
    price,
    rating,
    discount,
    tags,
    image,
    qty,
  } = req.body;

  cart
    .findOne({ uid, pid })
    .then((d) => {
      if (d === null) {
        // add to cart logic
        return cart.create({ ...req.body, qty: 1, uid });
      } else {
        // update cart logic
        return cart.findByIdAndUpdate(d?._id, { qty: d?.qty + 1 });
      }
    })
    .then((d) => res.json({ status: true, data: d, err: null }))
    .catch((d) => res.json({ status: false, data: null, err: d }));
}

module.exports = addRoute;
