import { useMemo, useReducer, useState } from "react";
import AppContext from "../contexts/AppContext";
import Toast from "./Toast";

const cartReducer = (state, action) => {
	let existingItemIndex;
	switch (action.type) {
		case "ADD_TO_CART":
			existingItemIndex = state.findIndex(
				(item) => item.id === action.payload.id
			);

			if (existingItemIndex >= 0) {
				return state.map((item, index) =>
					index === existingItemIndex
						? { ...item, quantity: item.quantity + 1 }
						: item
				);
			}
			return [...state, { ...action.payload, quantity: 1 }];

		case "REMOVE_FROM_CART":
			return state.filter((item) => item.id !== action.payload);

		case "INCREMENT_QUANTITY": {
			return state.map((item) =>
				item.id === action.payload
					? { ...item, quantity: item.quantity + 1 }
					: item
			);
		}

		case "DECREMENT_QUANTITY": {
			return state
				.map((item) =>
					item.id === action.payload
						? { ...item, quantity: item.quantity - 1 }
						: item
				)
				.filter((item) => item.quantity > 0);
		}

		case "CLEAR_CART":
			return [];

		default:
			return state;
	}
};

const AppProvider = ({ children }) => {
	const [cart, dispatch] = useReducer(cartReducer, []);
	const [toast, setToast] = useState(null);

	const cartTotal = useMemo(() => {
		return cart
			.reduce((total, item) => total + item.price * item.quantity, 0)
			.toFixed(2);
	}, [cart]);

	const cartItemsCount = useMemo(() => {
		return cart.reduce((total, item) => total + item.quantity, 0);
	}, [cart]);

	const handleAddToCart = (product) => {
		dispatch({ type: "ADD_TO_CART", payload: product });
	};

	const handleRemoveFromCart = (productId) => {
		dispatch({ type: "REMOVE_FROM_CART", payload: productId });
	};

	const handleIncrementQuantity = (productId) => {
		dispatch({ type: "INCREMENT_QUANTITY", payload: productId });
	};

	const handleDecrementQuantity = (productId) => {
		dispatch({ type: "DECREMENT_QUANTITY", payload: productId });
	};

	const handleClearCart = () => {
		dispatch({ type: "CLEAR_CART" });
	};
	const showToast = (type, message) => {
		setToast({ type, message });
	};

	const contextValue = {
		cart,
		cartTotal,
		cartItemsCount,
		handleAddToCart,
		handleRemoveFromCart,
		handleIncrementQuantity,
		handleDecrementQuantity,
		handleClearCart,
		showToast,
	};

	return (
		<AppContext.Provider value={contextValue}>
			<div className="fixed top-4 right-4 z-100">
				{toast && (
					<Toast
						type={toast.type}
						message={toast.message}
						onClose={() => setToast(null)}
					/>
				)}
			</div>
			{children}
		</AppContext.Provider>
	);
};

export default AppProvider;
