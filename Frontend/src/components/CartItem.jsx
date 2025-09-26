import { Minus, Plus, X } from "lucide-react";
import React, { useContext, useMemo } from "react";
import AppContext from "../contexts/AppContext";

const CartItem = React.memo(({ item }) => {
	const {
		handleRemoveFromCart,
		handleIncrementQuantity,
		handleDecrementQuantity,
	} = useContext(AppContext);

	const subtotal = useMemo(
		() => (item.price * item.quantity).toFixed(2),
		[item.price, item.quantity]
	);

	return (
		<div className="bg-white rounded-lg shadow-md p-4 flex items-center gap-4 transition-all duration-300 hover:shadow-lg">
			<img
				src={item.image}
				alt={item.name}
				className="w-16 h-16 object-cover rounded flex-shrink-0"
			/>

			<div className="flex-1 min-w-0">
				<h3 className="font-semibold text-gray-800 truncate">
					{item.name}
				</h3>
				<p className="text-blue-600 font-bold">${item.price}</p>
				<p className="text-sm text-gray-500">Subtotal: ${subtotal}</p>
			</div>

			<div className="flex items-center gap-3">
				<div className="flex items-center gap-2 bg-gray-100 rounded-lg px-2 py-1">
					<button
						onClick={() => handleDecrementQuantity(item.id)}
						className="p-1 rounded-full hover:bg-gray-200 transition-colors"
						aria-label="Decrease quantity"
					>
						<Minus className="w-4 h-4" />
					</button>
					<span className="px-2 py-1 bg-white rounded min-w-[2rem] text-center">
						{item.quantity}
					</span>
					<button
						onClick={() => handleIncrementQuantity(item.id)}
						className="p-1 rounded-full hover:bg-gray-200 transition-colors"
						aria-label="Increase quantity"
					>
						<Plus className="w-4 h-4" />
					</button>
				</div>

				<button
					onClick={() => handleRemoveFromCart(item.id)}
					className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
					aria-label="Remove item"
				>
					<X className="w-4 h-4" />
				</button>
			</div>
		</div>
	);
});

export default CartItem;
