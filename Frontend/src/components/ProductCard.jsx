import { Loader2, Plus } from "lucide-react";
import React from "react";

const ProductCard = React.memo(({ product }) => {
	const [isAdding, setIsAdding] = React.useState(false);
	return (
		<div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
			<div className="relative">
				<img
					src={product.image}
					alt={product.name}
					className="w-full h-48 object-cover"
					loading="lazy"
				/>

				{product.category && (
					<span className="absolute top-2 right-2 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
						{product.category}
					</span>
				)}
			</div>

			<div className="p-4">
				<h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
					{product.name}
				</h3>
				<p className="text-gray-600 text-sm mb-3 line-clamp-2">
					{product.description}
				</p>

				<div className="flex justify-between items-center">
					<span className="text-xl font-bold text-blue-600">
						${product.price}
					</span>
					<button
						disabled={isAdding}
						className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
					>
						{isAdding ? (
							<Loader2 className="w-4 h-4 animate-spin" />
						) : (
							<Plus className="w-4 h-4" />
						)}
						{isAdding ? "Adding..." : "Add to Cart"}
					</button>
				</div>
			</div>
		</div>
	);
});

export default ProductCard;
