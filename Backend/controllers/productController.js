const productData = require("../utils/productData");

const getAllProducts = (req, res) => {
	try {
		res.status(200).json({
			success: true,
			data: productData,
			message: "Products fetched successfully",
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
	getAllProducts,
};
