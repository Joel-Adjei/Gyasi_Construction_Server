import mongoose from "mongoose";

const settingsSchema = new mongoose.Schema(
  {
    cloudinaryCloudName: { type: String, default: "" },
    cloudinaryUploadPreset: { type: String, default: "" },
    companyName: { type: String, required: true },
    contactAddress: { type: String, required: true },
    contactEmail: { type: String, required: true },
    contactPhone: { type: String, required: true },
  },
  { timestamps: true },
);

const Settings = mongoose.model("Settings", settingsSchema);
export { Settings };
