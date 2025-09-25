const createOrder = (req, res) => {
	try {
		const { firstName, lastName, address, items = [] } = req.body;

		// Validate required fields
		if (!firstName || !lastName || !address) {
			return res.status(400).json({
				success: false,
				message: "First name, last name, and address are required",
			});
		}

		if (items.length === 0) {
			return res.status(400).json({
				success: false,
				message: "No items in the order",
			});
		}

		// Log order details
		console.log("=== NEW ORDER CREATED ===");
		console.log(`Customer: ${firstName} ${lastName}`);
		console.log(`Address: ${address}`);
		console.log("Items:");

		items.forEach((item) => {
			console.log(`- ${item.name} x ${item.quantity}`);
		});

		console.log("==========================");

		// Return success response
		res.status(201).json({
			success: true,
			message: "Order created successfully",
		});
	} catch (error) {
		res.status(500).json({
			success: false,
			message: "Failed to fetch products",
			error: error.message,
		});
	}
};

module.exports = {
	createOrder,
};
