import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, minlength: 2, maxlength: 80 },
    email: { type: String, required: true },
    phone: { type: String },
    subject: { type: String, required: true, minlength: 5, maxlength: 120 },
    message: { type: String, required: true, minlength: 10, maxlength: 2000 },
    read: { type: Boolean, default: false },
  },
  { timestamps: true },
);

const Message = mongoose.model("Message", messageSchema);
export { Message };
