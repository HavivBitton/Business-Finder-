const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  plan: {
    type: String,
    enum: ["Standard", "Gold", "Platinum"],
    default: "Standard",
  },
  role: {
    type: String,
    enum: ["user", "businessOwner", "guest"],
    default: "guest",
  },
  imageUrl: { type: String },
  savedBusinesses: [{ type: Schema.Types.ObjectId, ref: "Business" }],
});

module.exports = model("User", userSchema);
