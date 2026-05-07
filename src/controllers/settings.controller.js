import { Settings } from "../models/Settings.js";

// @desc    Get settings
// @route   GET /api/settings
// @access  Public
const getSettings = async (req, res) => {
  const settings = await Settings.findOne({});
  if (settings) {
    res.json(settings);
  } else {
    res.status(404).json({ message: "Settings not found" });
  }
};

// @desc    Create settings
// @route   POST /api/settings
// @access  Private/Admin
const createSettings = async (req, res) => {
  const {
    cloudinaryCloudName,
    cloudinaryUploadPreset,
    companyName,
    contactAddress,
    contactEmail,
    contactPhone,
  } = req.body;

  // Check if settings already exist
  const existingSettings = await Settings.findOne({});
  if (existingSettings) {
    return res
      .status(400)
      .json({ message: "Settings already exist. Use PUT to update." });
  }

  const settings = new Settings({
    cloudinaryCloudName,
    cloudinaryUploadPreset,
    companyName,
    contactAddress,
    contactEmail,
    contactPhone,
  });

  const createdSettings = await settings.save();
  res.status(201).json(createdSettings);
};

// @desc    Update settings (full update)
// @route   PUT /api/settings
// @access  Private/Admin
const updateSettings = async (req, res) => {
  const {
    cloudinaryCloudName,
    cloudinaryUploadPreset,
    companyName,
    contactAddress,
    contactEmail,
    contactPhone,
  } = req.body;

  const settings = await Settings.findOne({});

  if (settings) {
    settings.cloudinaryCloudName =
      cloudinaryCloudName !== undefined
        ? cloudinaryCloudName
        : settings.cloudinaryCloudName;
    settings.cloudinaryUploadPreset =
      cloudinaryUploadPreset !== undefined
        ? cloudinaryUploadPreset
        : settings.cloudinaryUploadPreset;
    settings.companyName = companyName || settings.companyName;
    settings.contactAddress = contactAddress || settings.contactAddress;
    settings.contactEmail = contactEmail || settings.contactEmail;
    settings.contactPhone = contactPhone || settings.contactPhone;

    const updatedSettings = await settings.save();
    res.json(updatedSettings);
  } else {
    res.status(404).json({ message: "Settings not found" });
  }
};

// @desc    Update settings (partial update)
// @route   PATCH /api/settings
// @access  Private/Admin
const patchSettings = async (req, res) => {
  const updates = req.body;

  const settings = await Settings.findOne({});

  if (settings) {
    Object.keys(updates).forEach((key) => {
      if (updates[key] !== undefined) {
        settings[key] = updates[key];
      }
    });

    const updatedSettings = await settings.save();
    res.json(updatedSettings);
  } else {
    res.status(404).json({ message: "Settings not found" });
  }
};

// @desc    Delete settings
// @route   DELETE /api/settings
// @access  Private/Admin
const deleteSettings = async (req, res) => {
  const settings = await Settings.findOne({});

  if (settings) {
    await settings.deleteOne();
    res.json({ message: "Settings removed" });
  } else {
    res.status(404).json({ message: "Settings not found" });
  }
};

export {
  getSettings,
  createSettings,
  updateSettings,
  patchSettings,
  deleteSettings,
};
