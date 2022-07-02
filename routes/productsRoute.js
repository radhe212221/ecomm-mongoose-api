const { products } = require("../models");
function productsRoute(req, res, next) {
  products
    .find()
    .then((d) => res.json({ status: true, data: d, err: null }))
    .catch((d) => res.json({ status: false, data: null, err: d }));
}

module.exports = productsRoute;
