import { Package, ShoppingCart } from "lucide-react";
import { NavLink } from "react-router";
import { useContext } from "react";
import AppContext from "../contexts/AppContext";
const Navbar = () => {
	const { cartItemsCount } = useContext(AppContext);
	return (
		<header className="bg-white shadow-lg sticky top-0 z-50">
			<div className="container mx-auto px-4 py-4">
				<div className="flex justify-between items-center">
					<div className="flex items-center space-x-2">
						<Package className="w-8 h-8 text-blue-600" />
						<h1 className="text-2xl font-bold text-gray-900">
							<span className="text-blue-600">E</span>Shop
						</h1>
					</div>

					<nav className="flex items-center gap-4">
						<NavLink
							to="/"
							className={({ isActive }) =>
								`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
									isActive
										? "bg-blue-600 text-white shadow-md"
										: "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
								}`
							}
						>
							Products
						</NavLink>

						<NavLink
							to="/cart"
							className={({ isActive }) =>
								`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 relative ${
									isActive
										? "bg-blue-600 text-white shadow-md"
										: "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
								}`
							}
						>
							<ShoppingCart className="w-4 h-4" />
							Cart
							{cartItemsCount > 0 && (
								<span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
									{cartItemsCount}
								</span>
							)}
						</NavLink>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
