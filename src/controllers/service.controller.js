import { Service } from "../models/Service.js";

// @desc    Get all services
// @route   GET /api/services
// @access  Public
const getServices = async (req, res) => {
  const services = await Service.find({}).sort({ date: -1 });
  res.json(services);
};

// @desc    Get single service
// @route   GET /api/services/:id
// @access  Public
const getServiceById = async (req, res) => {
  const service = await Service.findById(req.params.id);

  if (service) {
    res.json(service);
  } else {
    res.status(404).json({ message: "Service not found" });
  }
};

// @desc    Create a service
// @route   POST /api/services
// @access  Private/Admin
const createService = async (req, res) => {
  const {
    title,
    desc,
    longDesc,
    category,
    startingPrice,
    duration,
    projectsCompleted,
    features,
    process,
    date,
    featured,
    images,
  } = req.body;

  const service = new Service({
    title,
    desc,
    longDesc,
    category,
    startingPrice,
    duration,
    projectsCompleted,
    features,
    process,
    date,
    featured,
    images,
  });

  const createdService = await service.save();
  res.status(201).json(createdService);
};

// @desc    Update a service
// @route   PUT /api/services/:id
// @access  Private/Admin
const updateService = async (req, res) => {
  const {
    title,
    desc,
    longDesc,
    category,
    startingPrice,
    duration,
    projectsCompleted,
    features,
    process,
    date,
    featured,
    images,
  } = req.body;

  const service = await Service.findById(req.params.id);

  if (service) {
    service.title = title || service.title;
    service.desc = desc || service.desc;
    service.longDesc = longDesc !== undefined ? longDesc : service.longDesc;
    service.category = category !== undefined ? category : service.category;
    service.startingPrice = startingPrice !== undefined ? startingPrice : service.startingPrice;
    service.duration = duration !== undefined ? duration : service.duration;
    service.projectsCompleted = projectsCompleted !== undefined ? projectsCompleted : service.projectsCompleted;
    service.features = features !== undefined ? features : service.features;
    service.process = process !== undefined ? process : service.process;
    service.date = date !== undefined ? date : service.date;
    service.featured = featured !== undefined ? featured : service.featured;
    service.images = images !== undefined ? images : service.images;

    const updatedService = await service.save();
    res.json(updatedService);
  } else {
    res.status(404).json({ message: "Service not found" });
  }
};

// @desc    Delete a service
// @route   DELETE /api/services/:id
// @access  Private/Admin
const deleteService = async (req, res) => {
  const service = await Service.findById(req.params.id);

  if (service) {
    await service.deleteOne();
    res.json({ message: "Service removed" });
  } else {
    res.status(404).json({ message: "Service not found" });
  }
};

export {
  getServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
};
