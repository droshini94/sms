const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// Load Environment Variables
dotenv.config();

// Create Express App
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import Routes
const authRoutes = require("./routes/authRoutes");
const planRoutes = require("./routes/planRoutes");
const subscriptionRoutes = require("./routes/subscriptionRoutes");

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/plans", planRoutes);
app.use("/api/subscriptions", subscriptionRoutes);

// Home Route
app.get("/", (req, res) => {
    res.send("Subscription Management System Backend is Running 🚀");
});

// MongoDB Connection
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("✅ MongoDB Connected Successfully");

        app.listen(process.env.PORT || 5000, () => {
            console.log(
                `🚀 Server running on http://localhost:${process.env.PORT || 5000}`
            );
        });
    })
    .catch((err) => {
        console.log("❌ Database Connection Failed");
        console.log(err);
    });