import { Package } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_PATH } from "../utils/api";

const Products = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await axios.get(API_PATH.GET_ALL_PRODUCTS);
				const { data } = response.data;
				setProducts(data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchProducts();
	}, []);

	return (
		<div className="container mx-auto px-4 py-8">
			{products.length === 0 ? (
				<div className="text-center py-16">
					<Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
					<h2 className="text-xl font-semibold text-gray-600 mb-2">
						No products found
					</h2>
					<p className="text-gray-500">Try adjusting your search or filters.</p>
				</div>
			) : (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
					{products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			)}
		</div>
	);
};

export default Products;
