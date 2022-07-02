const { users } = require("../models");
function signup(req, res, next) {
  let { name, email, phone, password } = req.body;
  users
    .findOne({ email })
    .then((d) =>
      d === null
        ? Promise.resolve()
        : Promise.reject("invalid user already exists")
    )
    .then((d) => users.create(req.body))
    .then((d) => res.json({ status: true, data: d, err: null }))
    .catch((d) => res.json({ status: false, data: null, err: d }));
}

module.exports = signup;
