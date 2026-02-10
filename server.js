import express from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

//Import routes
import salesRoutes from "./routes/salesRoutes.js";

dotenv.config();

const app = express();
const server = http.createServer(app);

//Connect to MongoDB
connectDB();

//Middleware
app.use(cors());                    
app.use(express.json());           
app.use(express.urlencoded({ extended: true }));

//Routes
app.get("/", (req, res) => {
  res.send("Sales Leaderboard API is running 🚀");
});

app.use("/api/sales", salesRoutes);

//404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

//Global error handler (optional but recommended)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Something went wrong!" });
});

//Start Server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});