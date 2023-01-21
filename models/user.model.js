const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true, minlength: 8 },
    images: [{ type: String }],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const userModel = model("user", UserSchema);

module.exports = userModel;
