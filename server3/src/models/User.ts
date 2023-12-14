import mongoose, { Document, Schema } from "mongoose";

interface User extends Document {
  username: string;
  email: string;
  password: string;
}

const userSchema = new Schema<User>({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const UserModel = mongoose.model<User>("User", userSchema);

export default UserModel;
