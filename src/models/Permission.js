const mongoose = require("mongoose");

const PermissionSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ["starter", "user", "admin", "genai"],
    default: "user"
  },
  project: {
    type: String,
    default: "scanzaclip"
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  notes: {
    type: String,
    default: ""
  }
});

module.exports = mongoose.model("Permission", PermissionSchema);
