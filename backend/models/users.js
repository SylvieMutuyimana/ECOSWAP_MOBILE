import mongoose from "mongoose";

const wishlistSchema = [{
  item_id: { type: String }, doneOn: { type: String },
}];

const cartSchema = [{
  item_id: { type: String },doneOn: { type: String },
}];

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumb: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true },
    cart: { type: [cartSchema], required: false, default: [] },
    wishlist: { type: [wishlistSchema], required: false, default: [] },
    type: {
      type: String,
      required: true,
      enum: ["admin", "buyer", "seller"],
    },
    joining_date: { type: Date, default: Date.now },
    doneOn: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
