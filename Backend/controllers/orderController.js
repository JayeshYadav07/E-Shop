const createOrder = (req, res) => {
	res.status(200).json({
		success: true,
		message: "Order created successfully",
	});
};

module.exports = {
	createOrder,
};
