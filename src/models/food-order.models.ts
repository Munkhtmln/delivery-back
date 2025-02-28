// import mongoose, { ObjectId, Schema } from "mongoose";

// type foodorderSchematype = {
//   foodName: string;
//   price: Number;
//   image: string;
//   ingredients: string;
//   category: ObjectId;
// };

// const foodOrderSchema: Schema = new Schema(
//   {
//     user: { type: Schema.Types.ObjectId, rel: "foodorder", required: true },
//     totalPrice: { type: Number, required: true },
//     foodOrderItems:{FoodorderItem[]},
//     status:["PENDING","CANCELED","DELIVERED"],
//     category: {
//       type: Schema.Types.ObjectId,
//       rel: "foods",
//       required: true,
//     },
//   },
//   { timestamps: true }
// );
// export default mongoose.model<foodorderSchematype>("foodorder", foodOrderSchema);
