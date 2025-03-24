import mongoose, { ObjectId, Schema } from "mongoose";

type authenticationSchematype = {
  email: string;
  password: string;
  phoneNumber: number;
  role?: string;
  ttl?: Date;
  isVerified?: boolean;
};

const authenticationSchema: Schema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    role: ["User", "Admin"],
    ttl: { type: Date, required: true },
    isVerified: { type: Boolean, requierd: true },
  },
  { timestamps: true }
);
export default mongoose.model<authenticationSchematype>(
  "Authentication",
  authenticationSchema
);
