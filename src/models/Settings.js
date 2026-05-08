import mongoose from "mongoose";

const settingsSchema = new mongoose.Schema(
  {
    cloudinaryCloudName: { type: String, default: "" },
    cloudinaryUploadPreset: { type: String, default: "" },
    companyName: { type: String, default: "" },
    contactAddress: { type: String, default: "" },
    contactEmail: { type: String, default: "" },
    contactPhone: { type: String, default: "" },
  },
  { timestamps: true },
);

const Settings = mongoose.model("Settings", settingsSchema);
export { Settings };
