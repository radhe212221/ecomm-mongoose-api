require("dotenv").config()
const mongoose = require("mongoose");
const URL = process.env.DB_URL || "";
mongoose.connect(URL);

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  password: String,
});
const productsSchema = new mongoose.Schema({
  title: String,
  price: Number,
  rating: Number,
  discount: Number,
  tags: String,
  image: String,
});
const cartSchema = new mongoose.Schema({
  uid: String,
  pid: String,
  name: String,
  email: String,
  phone: String,
  password: String,
  title: String,
  price: Number,
  rating: Number,
  discount: Number,
  tags: String,
  image: String,
  qty: Number,
});
const ordersSchema = new mongoose.Schema({
  uid: String,
  pid: String,
  name: String,
  email: String,
  phone: String,
  password: String,
  title: String,
  price: Number,
  rating: Number,
  discount: Number,
  tags: String,
  image: String,
  qty: Number,
});

const users = new mongoose.model("users", userSchema);
const products = new mongoose.model("products", productsSchema);
const cart = new mongoose.model("cart", cartSchema);
const orders = new mongoose.model("orders", ordersSchema);

module.exports = {
  users,
  products,
  cart,
  orders,
};
