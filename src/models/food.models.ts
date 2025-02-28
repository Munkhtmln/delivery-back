import mongoose, { ObjectId, Schema } from "mongoose";

type foodSchematype = {
  foodName: string;
  price: Number;
  image: string;
  ingredients: string;
  category: ObjectId;
};

const foodSchema: Schema = new Schema(
  {
    foodName: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    ingredients: { type: String, required: true },
    category: {
      type: Schema.Types.ObjectId,
      rel: "food-category",
      required: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model<foodSchematype>("food", foodSchema);
