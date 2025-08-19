
const express = require("express");
const router = express.Router();
const permissionsController = require("../controllers/permissionsController");

// GET all permissions
router.get("/", permissionsController.getAllPermissions);

// POST create permission
router.post("/", permissionsController.createPermission);

// PUT update permission
router.put("/:id", permissionsController.updatePermission);

// DELETE permission
router.delete("/:id", permissionsController.deletePermission);

module.exports = router;
