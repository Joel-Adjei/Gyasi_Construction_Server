import mongoose from "mongoose";

const serviceProcessSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
  },
  { _id: false },
);

const serviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 100,
    },
    desc: { type: String, required: true, maxlength: 200 },
    longDesc: { type: String, maxlength: 2000 },
    category: { type: String },
    startingPrice: { type: String },
    duration: { type: String },
    projectsCompleted: { type: Number },
    features: [{ type: String }],
    process: [serviceProcessSchema],
    date: { type: String },
    featured: { type: Boolean, default: false },
    images: [{ type: String }],
  },
  { timestamps: true },
);

const Service = mongoose.model("Service", serviceSchema);
export { Service };
