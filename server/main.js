const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const connectDB = require("./dbConnection");

const usersRouter = require("./routes/usersRoute.js");
const businessPostsRouter = require("./routes/businessPostsRoute.js");

const app = express();
const PORT = process.env.PORT;

// Enable CORS for the frontend
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Parse incoming JSON requests
app.use(express.json());

// Connect to MongoDB
connectDB();

// Example route to verify the server is running
app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.use("/api/users", usersRouter);
app.use("/api/businessPosts", businessPostsRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
