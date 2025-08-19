const Permission = require("../models/Permission");

// GET all permissions
exports.getAllPermissions = async (req, res) => {
  try {
    const permissions = await Permission.find();
    res.json(permissions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// CREATE permission
exports.createPermission = async (req, res) => {
  const { username, role, project, notes } = req.body;
  const newPermission = new Permission({ username, role, project, notes });
  try {
    const savedPermission = await newPermission.save();
    res.status(201).json(savedPermission);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// UPDATE permission by ID
exports.updatePermission = async (req, res) => {
  try {
    const updated = await Permission.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE permission by ID
exports.deletePermission = async (req, res) => {
  try {
    await Permission.findByIdAndDelete(req.params.id);
    res.json({ message: "Permission deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
