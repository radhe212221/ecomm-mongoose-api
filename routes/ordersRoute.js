const { orders } = require("../models");
function ordersRoute(req, res, next) {
  let uid = req.uid;
  orders
    .find({ uid })
    .then((d) => res.json({ status: true, data: d, err: null }))
    .catch((d) => res.json({ status: false, data: null, err: d }));
}

module.exports = ordersRoute;
