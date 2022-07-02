const { users } = require("../models");
const { verify, sign } = require("../utils");
function login(req, res, next) {
  let { email, password } = req.body;
  users
    .findOne({ email, password })
    .then((d) => sign(d))
    .then((d) =>
      d ? Promise.resolve(d) : Promise.reject("invalid credtencials")
    )
    .then((d) => res.json({ status: true, data: d, err: null }))
    .catch((d) => res.json({ status: false, data: null, err: d }));
}

module.exports = login;
