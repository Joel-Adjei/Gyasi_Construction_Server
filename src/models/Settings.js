import mongoose from "mongoose";

const settingsSchema = new mongoose.Schema(
  {
    cloudinaryCloudName: { type: String, default: "" },
    cloudinaryUploadPreset: { type: String, default: "" },
    companyName: { type: String, default: "" },
    contactAddress: { type: String, default: "" },
    contactEmail: { type: String, default: "" },
    contactPhone: { type: String, default: "" },
    whatsApp: {
      label: { type: String, default: "WhatAapp" },
      name: { type: String, default: "" },
      link: { type: String, default: "" },
    },
    facebook: {
      label: { type: String, default: "Facebook" },
      name: { type: String, default: "" },
      link: { type: String, default: "" },
    },
    instagram: {
      label: { type: String, default: "Instagram" },
      name: { type: String, default: "" },
      link: { type: String, default: "" },
    },
    twitter: {
      label: { type: String, default: "Twitter" },
      name: { type: String, default: "" },
      link: { type: String, default: "" },
    },
    snap: {
      label: { type: String, default: "Snap Chat" },
      name: { type: String, default: "" },
      link: { type: String, default: "" },
    },
  },
  { timestamps: true },
);

const Settings = mongoose.model("Settings", settingsSchema);
export { Settings };
