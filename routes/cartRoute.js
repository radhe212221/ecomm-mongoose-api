const { cart } = require("../models");
function cartRoute(req, res, next) {
  let uid = req.uid;
  cart
    .find({ uid })
    .then((d) => res.json({ status: true, data: d, err: null }))
    .catch((d) => res.json({ status: false, data: null, err: d }));
}

module.exports = cartRoute;
