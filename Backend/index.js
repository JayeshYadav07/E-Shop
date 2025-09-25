const express = require("express");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(
	cors({
		origin: process.env.CLIENT_URL || "http://localhost:3000",
		credentials: true,
	})
);
app.use(express.json());

// API Routes
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);

// Health check endpoint
app.get("/api/health", (req, res) => {
	res.status(200).json({
		success: true,
		message: "Server is running",
		timestamp: new Date().toISOString(),
		environment: process.env.NODE_ENV || "development",
	});
});

// 404 handler for unknown routes
app.use((req, res) => {
	res.status(404).json({
		success: false,
		message: `Route ${req.originalUrl} not found`,
	});
});

// Global error handler
app.use(function (err, req, res, next) {
	res.status(err.status || 500);
	res.json({
		success: false,
		message: err.message || "Internal Server Error",
	});
});
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
