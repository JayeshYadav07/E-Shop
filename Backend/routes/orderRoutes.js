const express = require("express");
const { createOrder } = require("../controllers/orderController");

const router = express.Router();

// POST /api/orders - Create new order
router.post("/", createOrder);

module.exports = router;
