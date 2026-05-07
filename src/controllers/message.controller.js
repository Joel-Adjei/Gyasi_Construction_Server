import { Message } from "../models/Message.js";
import nodemailer from "nodemailer";

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
const submitContactForm = async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  const newMessage = new Message({
    name,
    email,
    phone,
    subject,
    message,
  });

  const createdMessage = await newMessage.save();

  // Send Email
  if (process.env.SMTP_USER && process.env.SMTP_PASS !== "password") {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: `"${name}" <${email}>`,
        to: process.env.COMPANY_EMAIL,
        subject: `New Contact Inquiry: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
      });
    } catch (error) {
      console.error("Email sending failed:", error);
    }
  }

  res
    .status(201)
    .json({ success: true, message: "Your inquiry has been received." });
};

// @desc    Get all messages
// @route   GET /api/messages
// @access  Private/Admin
const getMessages = async (req, res) => {
  const messages = await Message.find({}).sort({ createdAt: -1 });
  res.json(messages);
};

// @desc    Mark message as read
// @route   PATCH /api/messages/:id/read
// @access  Private/Admin
const markAsRead = async (req, res) => {
  const message = await Message.findById(req.params.id);

  if (message) {
    message.read = true;
    const updatedMessage = await message.save();
    res.json(updatedMessage);
  } else {
    res.status(404).json({ message: "Message not found" });
  }
};

// @desc    Delete a message
// @route   DELETE /api/messages/:id
// @access  Private/Admin
const deleteMessage = async (req, res) => {
  const message = await Message.findById(req.params.id);

  if (message) {
    await message.deleteOne();
    res.json({ message: "Message removed" });
  } else {
    res.status(404).json({ message: "Message not found" });
  }
};

export { submitContactForm, getMessages, markAsRead, deleteMessage };
