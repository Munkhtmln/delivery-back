import mongoose, { Schema } from "mongoose";

type foodCategorySchematype = { categoryName: string };

const foodCategorySchema: Schema = new Schema(
  {
    categoryName: { type: String, required: true },
  },
  { timestamps: true }
);
export default mongoose.model<foodCategorySchematype>(
  "food-category",
  foodCategorySchema
);
