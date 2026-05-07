import mongoose from "mongoose";
import "dotenv/config";
import { User } from "../models/User.js";
import { Service } from "../models/Service.js";
import connectDB from "../config/db.js";

const seed = async () => {
  await connectDB();

  try {
    // Clear existing data
    await User.deleteMany({});
    await Service.deleteMany({});

    // Create admin
    const admin = new User({
      name: "Site Administrator",
      email: "gyasi@admin.com",
      password: "Gyasi_Admin@123",
      role: "admin",
    });
    await admin.save();
    console.log("Admin user created: gyasi@admin.com / Gyasi_Admin@123");

    // Create initial services
    const services = [
      {
        title: "Residential Construction",
        shortDescription:
          "Custom homes and luxury villas built to your exact specifications.",
        fullDescription:
          "We specialize in high-end residential construction, offering a complete design-build service that takes you from initial concept to the final move-in. Our team of expert architects and builders work in harmony to ensure every detail of your dream home is realized with perfection.",
        imageUrl:
          "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000",
        icon: "FaBuilding",
        featured: true,
        displayOrder: 1,
      },
      {
        title: "Commercial Projects",
        shortDescription:
          "State-of-the-art office buildings and retail spaces for modern business.",
        fullDescription:
          "Our commercial division handles everything from office complex developments to boutique retail fit-outs. We understand the unique demands of commercial construction, including tight deadlines, strict safety regulations, and the need for functional, aesthetic work environments.",
        imageUrl:
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000",
        icon: "FaHardHat",
        featured: true,
        displayOrder: 2,
      },
      {
        title: "Renovation & Restoration",
        shortDescription:
          "Transforming existing structures with modern upgrades and careful preservation.",
        fullDescription:
          "Whether it is a historic preservation project or a modern home renovation, we bring the same level of care and precision to transforming existing spaces. Our team expertise ensures that renovations are structurally sound, energy-efficient, and aesthetically updated.",
        imageUrl:
          "https://images.unsplash.com/photo-1503387762-592dea58ef22?auto=format&fit=crop&q=80&w=2000",
        icon: "FaTools",
        featured: true,
        displayOrder: 3,
      },
    ];

    await Service.insertMany(services);
    console.log("Initial services seeded.");

    process.exit();
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
};

seed();
