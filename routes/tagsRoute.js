const { products } = require("../models");
const { getTags } = require("../utils");
function tagsRoute(req, res, next) {
  products
    .find()
    .then((d) => getTags(d))
    .then((d) => res.json({ status: true, data: d, err: null }))
    .catch((d) => res.json({ status: false, data: null, err: d }));
}

module.exports = tagsRoute;
