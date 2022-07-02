const { cart } = require("../models");
function removeRoute(req, res, next) {
  let id = req?.params?.id;
  cart
    .findByIdAndDelete(id)
    .then((d) => res.json({ status: true, data: d, err: null }))
    .catch((d) => res.json({ status: false, data: null, err: d }));
}

module.exports = removeRoute;
