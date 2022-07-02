const { cart } = require("../models");
function updateCartRoute(req, res, next) {
  let { id, qty } = req.params;
  cart
    .findbyIdAndUpdate(id, { qty })
    .then((d) => res.json({ status: true, data: d, err: null }))
    .catch((d) => res.json({ status: false, data: null, err: d }));
}

module.exports = updateCartRoute;
