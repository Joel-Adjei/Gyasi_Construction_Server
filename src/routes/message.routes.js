import express from "express";
import {
  getMessages,
  markAsRead,
  deleteMessage,
} from "../controllers/message.controller.js";
import { protect, admin } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", protect, admin, getMessages);
router.patch("/:id/read", protect, admin, markAsRead);
router.delete("/:id", protect, admin, deleteMessage);

export default router;
