import mongoose from "mongoose";

const itemsSchema = new mongoose.Schema(
    {
      name: {type:String, required: true,},
      image: {type:String, required: true,},
      amount: {type:Number, required: true,},
      category: {type:String, required: true,},
      seller: {type:String, required: true,}, 
      buyer: {type:String, required: false,}, 
      description: { type: String, required: true },
      status: { 
        type: String, required: true,
        enum: ["In stock", "sold"],
      },
      added_date: { type: Date, default: Date.now, }, 
      doneOn: { type: Date, default: Date.now, }, 
    },
  { timestamps: true }
);

const Items = mongoose.models.Items || mongoose.model("Items", itemsSchema);

export default Items;
