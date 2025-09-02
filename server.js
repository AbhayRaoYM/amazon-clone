const express = require("express");
const path = require("path");

const app = express();

// Serve static files (HTML, CSS, JS, images), Express to serve all files in your project root as static
app.use(express.static(path.join(__dirname, "public")));

// Root route sends index.html
app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

