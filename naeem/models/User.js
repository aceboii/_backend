const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fname: { type: String, required: true },
  lname: { type: String, default: "" },
  telephone: { type: String, default: "" },
  gender: { type: String, default: "", enum: ["", "male", "female"] },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  profilePicture: {
    type: String,
    default: "",
  },
  coverPicture: {
    type: String,
    default: "",
  },
  verified: {
    type: Boolean,
    default: false,
  },
});

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;
