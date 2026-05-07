import express from "express";
import { submitContactForm } from "../controllers/message.controller.js";

const router = express.Router();

router.post("/", submitContactForm);

export default router;
