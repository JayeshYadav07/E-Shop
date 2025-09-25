// In-memory array to store product data
const productsData = [
	{
		id: 1,
		name: "Wireless Headphones",
		description:
			"High-quality wireless headphones with active noise cancellation and 30-hour battery life",
		price: 99.99,
		category: "Electronics",
		image:
			"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
		inStock: true,
		stockQuantity: 50,
		createdAt: "2024-01-01T00:00:00.000Z",
	},
	{
		id: 2,
		name: "Smart Watch",
		description:
			"Feature-rich smartwatch with health tracking, GPS, and water resistance",
		price: 249.99,
		category: "Electronics",
		image:
			"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
		inStock: true,
		stockQuantity: 30,
		createdAt: "2024-01-02T00:00:00.000Z",
	},
	{
		id: 3,
		name: "Laptop Backpack",
		description:
			"Durable laptop backpack with multiple compartments and USB charging port",
		price: 59.99,
		category: "Accessories",
		image:
			"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
		inStock: true,
		stockQuantity: 75,
		createdAt: "2024-01-03T00:00:00.000Z",
	},
	{
		id: 4,
		name: "Bluetooth Speaker",
		description:
			"Portable Bluetooth speaker with premium sound quality and 12-hour battery",
		price: 79.99,
		category: "Electronics",
		image:
			"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
		inStock: true,
		stockQuantity: 40,
		createdAt: "2024-01-04T00:00:00.000Z",
	},
	{
		id: 5,
		name: "Wireless Mouse",
		description:
			"Ergonomic wireless mouse with precision tracking and long battery life",
		price: 29.99,
		category: "Electronics",
		image:
			"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
		inStock: true,
		stockQuantity: 100,
		createdAt: "2024-01-05T00:00:00.000Z",
	},
	{
		id: 6,
		name: "Phone Case",
		description:
			"Protective phone case with shock absorption and wireless charging compatibility",
		price: 19.99,
		category: "Accessories",
		image:
			"https://images.unsplash.com/photo-1535157412991-2ef801c1748b?w=400&auto=format&fit=crop",
		inStock: true,
		stockQuantity: 200,
		createdAt: "2024-01-06T00:00:00.000Z",
	},
	{
		id: 7,
		name: "Earbuds",
		description: "Compact earbuds with noise cancellation and charging case",
		price: 89.99,
		category: "Electronics",
		image:
			"https://images.unsplash.com/photo-1630331384146-a8b2a79a9558?w=400&auto=format&fit=crop",
		inStock: true,
		stockQuantity: 80,
		createdAt: "2024-01-07T00:00:00.000Z",
	},
	{
		id: 8,
		name: "Desk Lamp",
		description:
			"LED desk lamp with adjustable brightness and color temperature",
		price: 34.99,
		category: "Home & Office",
		image:
			"https://images.unsplash.com/photo-1731762524352-b5663f83a830?w=400&auto=format&fit=crop",
		inStock: true,
		stockQuantity: 60,
		createdAt: "2024-01-08T00:00:00.000Z",
	},
	{
		id: 9,
		name: "Wireless Keyboard",
		description:
			"Compact wireless keyboard with ergonomic design and long battery life",
		price: 49.99,
		category: "Electronics",
		image:
			"https://images.unsplash.com/photo-1669884210062-e3055c8c8f5d?q=80&w=400&auto=format&fit=cro",
		inStock: true,
		stockQuantity: 35,
		createdAt: "2024-01-09T00:00:00.000Z",
	},
	{
		id: 10,
		name: "Running Shoes",
		description:
			"Lightweight running shoes with breathable mesh and cushioned soles",
		price: 79.99,
		category: "Sports",
		image:
			"https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&auto=format&fit=crop",
		inStock: true,
		stockQuantity: 120,
		createdAt: "2024-01-10T00:00:00.000Z",
	},
	{
		id: 11,
		name: "Yoga Mat",
		description: "Non-slip yoga mat with extra cushioning for comfort",
		price: 25.99,
		category: "Sports",
		image:
			"https://images.unsplash.com/photo-1601925268030-e734cf5bdc52?w=400&auto=format&fit=crop",
		inStock: true,
		stockQuantity: 150,
		createdAt: "2024-01-11T00:00:00.000Z",
	},
	{
		id: 12,
		name: "Sunglasses",
		description: "Stylish UV-protection sunglasses with polarized lenses",
		price: 45.99,
		category: "Fashion",
		image:
			"https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&auto=format&fit=crop",
		inStock: true,
		stockQuantity: 70,
		createdAt: "2024-01-12T00:00:00.000Z",
	},
];

module.exports = productsData;
