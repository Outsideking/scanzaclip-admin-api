const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Import routes
const permissionsRoute = require("./routes/permissions");
app.use("/api/permissions", permissionsRoute);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const express = require('express');
const dbClient = require('./config/database');

const app = express();
app.use(express.json());

(async () => {
  await dbClient.connect();
})();

app.get('/', (req, res) => {
  res.send('Scanzaclip Admin API is running 🚀');
});

app.listen(process.env.PORT, () => {
  console.log(`✅ Server running on port ${process.env.PORT}`);
});
