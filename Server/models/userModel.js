const mongoose = require("mongoose")
const validator = require('validator');
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please fill this field!"],
  },
  email: {
    type: String,
    required: [true, "Please fill this field!"],
    unique: true
  },
  password: {
    type: String,
    required: [true, "Please fill this field!"],
    minLength: 6
  },
}
);
module.exports = mongoose.model("users", userSchema);