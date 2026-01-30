const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
app.use(express.json());

// allow React app to call backend
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// MongoDB connection
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
let db;

async function connectDB() {
  await client.connect();
  db = client.db("moodsync");
  console.log("MongoDB Connected");
}
connectDB();

// test route
app.get("/", (req, res) => {
  res.send("MoodSync backend working");
});

// register
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.json({ message: "All fields required" });
  }

  const exists = await db.collection("users").findOne({ email });
  if (exists) {
    return res.json({ message: "User already exists" });
  }

  await db.collection("users").insertOne({ name, email, password });
  res.json({ message: "Registered" });
});

// login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await db.collection("users").findOne({ email });

  if (!user) {
    return res.json({ message: "User not found" });
  }

  if (user.password !== password) {
    return res.json({ message: "Wrong password" });
  }

  res.json({ message: "Success", name: user.name, email: user.email });
});

// feedback
app.post("/feedback", async (req, res) => {
  const { email, message } = req.body;
  await db.collection("feedback").insertOne({ email, message });
  res.json({ message: "Feedback stored" });
});

// (extra backend route just to show playlist in backend - optional)
const playlists = {
  happy: ["Happy - Pharrell", "On Top of the World"],
  sad: ["Fix You", "Channa Mereya"],
  chill: ["LoFi Rain", "Ocean Waves"],
  energetic: ["Believer", "Stronger"],
  romantic: ["Perfect", "Tum Hi Ho"]
};

app.get("/playlist/:mood", (req, res) => {
  const mood = req.params.mood;
  res.json({ mood, songs: playlists[mood] || [] });
});

app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});
