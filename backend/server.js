const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Create express app
const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB (use Docker host 'mongo' when running in containers,
// otherwise fall back to localhost for local development)

// change localhost to mongo because the backend runs in a docker container
const MONGO_URI = process.env.MONGO_URI || "mongodb://mongo:27017/mern-docker";
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Connected to MongoDB (${MONGO_URI})`))
  .catch((err) => console.error("MongoDB connection error:", err.message));

// Item schema
const itemSchema = new mongoose.Schema({
  name: String,
});

const Item = mongoose.model("Item", itemSchema);

// GET endpoint to fetch all items
app.get("/api/items", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    console.error("GET /api/items error:", err.message);
    res.status(500).json({ error: "Failed to fetch items" });
  }
});

// POST endpoint to create a new item
app.post("/api/items", async (req, res) => {
  try {
    const newItem = new Item({ name: req.body.name });
    await newItem.save();
    res.json(newItem);
  } catch (err) {
    console.error("POST /api/items error:", err.message);
    res.status(500).json({ error: "Failed to save item" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
