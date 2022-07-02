require("dotenv").config();
const secret = process.env.SECRET || "";
const jwt = require("jsonwebtoken");

exports.sign = (data) => {
  return new Promise((resolve, reject) => {
    if (!data) return reject("no user found");

    jwt.sign({ id: data?._id?.toString() }, secret, (err, token) => {
      if (err) return reject(err);
      return resolve({ token });
    });
  });
};
exports.verify = (token) => {
  return new Promise((resolve, reject) => {
    if (!token) return reject("invalid token");
    jwt.verify(token, secret, (err, data) => {
      if (err) return reject(err);
      return resolve(data);
    });
  });
};
exports.getTags = (d) => {
  return new Promise((resolve) => {
    let temp = Array.from(new Set(d?.map((x) => x?.tags)));
    temp = temp.map((x) => ({
      t: x,
      c: d?.filter((y) => y?.tags === x)?.length,
    }));
    resolve(temp);
  });
};
exports.auth = (req, res, next) => {
  let status = false;
  let token = req?.headers?.authorization?.split(" ")[1];
  jwt.verify(token, secret, (err, data) => {
    if (data) {
      status = true;
      req.uid = data?.id;
    }
  });
  if (!status)
    return res.json({
      status: false,
      err: "invalid token / missing token",
      data: null,
    });

  next();
};
exports.rmeoveIdAndReturn = (a) => {
  let temp={...a}
  for(let item of temp)
  { 
    delete temp["_id"]
  }
  return temp
};
