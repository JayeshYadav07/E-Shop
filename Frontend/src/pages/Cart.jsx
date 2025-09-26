import { Form, NavLink, useNavigate } from "react-router";
import { Loader2, Package } from "lucide-react";
import { useContext, useState } from "react";
import AppContext from "../contexts/AppContext";
import CartItem from "../components/CartItem";
import FormInput from "../components/FormInput";
import { API_PATH } from "../utils/api";
import axios from "axios";

const Cart = () => {
	const { cart, cartTotal, showToast, handleClearCart } =
		useContext(AppContext);
	const [loading, setLoading] = useState(false);
	const [orderForm, setOrderForm] = useState({
		firstName: "",
		lastName: "",
		address: "",
	});
	const navigate = useNavigate();

	const handleChange = (event) => {
		let { name, value } = event.target;

		setOrderForm({
			...orderForm,
			[name]: value,
		});
	};

	const handleCheckout = async () => {
		try {
			setLoading(true);
			const response = await axios.post(API_PATH.CREATE_ORDER, {
				...orderForm,
				items: cart,
			});
			const { message } = response.data;
			console.log("Checkout successful:", message);
			showToast("success", message);
			handleClearCart();
			navigate("/");
		} catch (error) {
			const { message } = error.response.data;
			showToast("error", message);
			console.error("Checkout failed:", error);
		} finally {
			setLoading(false);
		}
	};

	if (cart.length === 0) {
		return (
			<div className="text-center py-16 min-h-[50vh]">
				<Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
				<h2 className="text-2xl font-bold text-gray-600 mb-2">
					Your cart is empty
				</h2>
				<p className="text-gray-500 mb-6">
					Add some products to get started!
				</p>
				<NavLink
					to="/"
					className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
				>
					Continue Shopping
				</NavLink>
			</div>
		);
	}
	return (
		<div>
			<h1 className="text-3xl font-bold text-gray-900 mb-8">
				Shopping Cart
			</h1>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
				{/* Cart Items */}
				<div className="space-y-4">
					<h2 className="text-xl font-semibold mb-4">
						Cart Items ({cart.length})
					</h2>
					{cart.map((item) => (
						<CartItem key={item.id} item={item} />
					))}

					<div className="bg-gray-100 rounded-lg p-4 sticky bottom-4">
						<div className="flex justify-between items-center text-xl font-bold">
							<span>Total: </span>
							<span className="text-blue-600">${cartTotal}</span>
						</div>
					</div>
				</div>

				{/* Order Form */}
				<Form
					className="bg-white rounded-lg shadow-md p-6 h-fit sticky top-24"
					onSubmit={handleCheckout}
				>
					<h2 className="text-xl font-semibold mb-6">
						Order Details
					</h2>

					<div className="space-y-4 mb-6">
						<FormInput
							label="First Name"
							name="firstName"
							required={true}
							placeholder="Enter your first name"
							onChange={handleChange}
						/>

						<FormInput
							label="Last Name"
							name="lastName"
							required={true}
							placeholder="Enter your last name"
							onChange={handleChange}
						/>

						<FormInput
							label="Address"
							name="address"
							type="textarea"
							required={true}
							placeholder="Enter your complete delivery address"
							rows={3}
							onChange={handleChange}
						/>
					</div>

					<div className="border-t pt-4 mb-4">
						<div className="flex justify-between text-sm text-gray-600 mb-2">
							<span>Subtotal:</span>
							<span>${cartTotal}</span>
						</div>
						<div className="flex justify-between text-sm text-gray-600 mb-2">
							<span>Shipping:</span>
							<span>Free</span>
						</div>
						<div className="flex justify-between text-lg font-bold">
							<span>Total:</span>
							<span className="text-blue-600">${cartTotal}</span>
						</div>
					</div>

					<button
						type="submit"
						className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
					>
						{loading ? (
							<>
								<Loader2 className="w-4 h-4 animate-spin" />
								Placing Order...
							</>
						) : (
							"Place Order"
						)}
					</button>
				</Form>
			</div>
		</div>
	);
};

export default Cart;
