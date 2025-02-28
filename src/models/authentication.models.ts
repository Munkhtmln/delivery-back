import mongoose, { ObjectId, Schema } from "mongoose";

type authenticationSchematype = {};

const authenticationSchema: Schema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    role: ["User", "Admin"],
    ttl: { Date, required: true },
    isVerified: { Boolean, requierd: true },
  },
  { timestamps: true }
);
export default mongoose.model<authenticationSchematype>(
  "Authentication",
  authenticationSchema
);
