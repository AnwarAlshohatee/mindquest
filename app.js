// Import Express and create the application.
const express = require("express");
const path = require("path");
const app = express();

// Import the activity routes.
const activityRoutes = require("./routes/activityRoutes");

// Allow Express to read JSON request bodies.
app.use(express.json());

// Register the activity API routes.
app.use("/api", activityRoutes);

// Tell Express to render .ejs files from the views folder.
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Allow the browser to load our simple CSS file.
app.use(express.static(path.join(__dirname, "public")));

// The only page in this starter: the homepage.
app.get("/", (req, res) => {
  res.render("index");
});

// Start the local development server.
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`MindQuest running at http://localhost:${PORT}`);
});
