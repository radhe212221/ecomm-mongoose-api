const { cart, orders } = require("../models");
const { rmeoveIdAndReturn } = require("../utils");
function checkoutRoute(req, res, next) {
  const { uid } = req;
  cart
    .find({ uid })
    .then((d) => rmeoveIdAndReturn(d))
    .then((d) => orders.insertMany(d))
    .then((d) => res.json({ status: true, data: d, err: null }))
    .catch((d) => res.json({ status: false, data: null, err: d }));
}

module.exports = checkoutRoute;
