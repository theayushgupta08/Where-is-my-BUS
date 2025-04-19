const express = require("express");
const db = require("./controllers/db");
const app = express();
const PORT = process.env.PORT || 4000;
const routes = require("./routes/route")
const cors = require('cors');
require("dotenv").config();

app.use(cors({
  origin: 'http://localhost:5174', // Frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
}));



// Middleware to parse JSON requests
app.use(express.json());
db();
// Basic route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/api", routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

