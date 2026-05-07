import express from "express";
import {
  getSettings,
  createSettings,
  updateSettings,
  patchSettings,
  deleteSettings,
} from "../controllers/settings.controller.js";
import { protect, admin } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", getSettings);
router.post("/", protect, admin, createSettings);
router.put("/", protect, admin, updateSettings);
router.patch("/", protect, admin, patchSettings);
router.delete("/", protect, admin, deleteSettings);

export default router;
