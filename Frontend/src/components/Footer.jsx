import {
	Mail,
	MapPin,
	Package,
	Phone,
	Truck,
	Shield,
	Heart,
} from "lucide-react";
const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-gray-900 text-white mt-16">
			{/* Main Footer Content */}
			<div className="container mx-auto px-4 py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Company Info */}
					<div className="space-y-4">
						<div className="flex items-center space-x-2">
							<Package className="w-8 h-8 text-blue-400" />
							<h3 className="text-2xl font-bold">
								<span className="text-blue-400">E</span>Shop
							</h3>
						</div>
						<p className="text-gray-300 leading-relaxed">
							Your trusted online destination for quality products at unbeatable
							prices. We're committed to providing exceptional customer service
							and fast, reliable delivery.
						</p>
					</div>

					{/* Quick Links */}
					<div className="space-y-4">
						<h4 className="text-lg font-semibold text-blue-400">Quick Links</h4>
						<ul className="space-y-2">
							{[
								"About Us",
								"Products",
								"Categories",
								"New Arrivals",
								"Sale Items",
								"Gift Cards",
							].map((link) => (
								<li key={link}>
									<a href="#" className="text-gray-300 hover:text-blue-400">
										{link}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Customer Service */}
					<div className="space-y-4">
						<h4 className="text-lg font-semibold text-blue-400">
							Customer Service
						</h4>
						<ul className="space-y-2">
							{[
								"Contact Us",
								"FAQ",
								"Shipping Info",
								"Returns",
								"Size Guide",
								"Track Order",
							].map((link) => (
								<li key={link}>
									<a href="#" className="text-gray-300 hover:text-blue-400">
										{link}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Contact Info */}
					<div className="space-y-4">
						<h4 className="text-lg font-semibold text-blue-400">
							Get In Touch
						</h4>
						<div className="space-y-3">
							<div className="flex items-center space-x-3 text-gray-300">
								<MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
								<span className="text-sm">
									123 E-Commerce Street
									<br />
									Digital City, DC 12345
								</span>
							</div>
							<div className="flex items-center space-x-3 text-gray-300">
								<Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
								<span className="text-sm">+1 (555) 123-4567</span>
							</div>
							<div className="flex items-center space-x-3 text-gray-300">
								<Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
								<span className="text-sm">support@eshop.com</span>
							</div>
						</div>

						{/* Newsletter Signup */}
						<div className="pt-4">
							<h5 className="text-sm font-semibold text-gray-200 mb-2">
								Stay Updated
							</h5>
							<div className="flex">
								<input
									type="email"
									placeholder="Your email"
									className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-blue-400 text-sm"
								/>
								<button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition-colors duration-300 rounded-r-lg">
									<Mail className="w-4 h-4" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Features Bar */}
			<div className="border-t border-gray-800">
				<div className="container mx-auto px-4 py-6">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="flex items-center space-x-3">
							<div className="p-2 bg-green-600 rounded-lg">
								<Truck className="w-5 h-5" />
							</div>
							<div>
								<h6 className="font-semibold text-sm">Free Shipping</h6>
								<p className="text-xs text-gray-400">On orders over ₹50</p>
							</div>
						</div>

						<div className="flex items-center space-x-3">
							<div className="p-2 bg-blue-600 rounded-lg">
								<Shield className="w-5 h-5" />
							</div>
							<div>
								<h6 className="font-semibold text-sm">Secure Payment</h6>
								<p className="text-xs text-gray-400">
									100% protected transactions
								</p>
							</div>
						</div>

						<div className="flex items-center space-x-3">
							<div className="p-2 bg-purple-600 rounded-lg">
								<Heart className="w-5 h-5" />
							</div>
							<div>
								<h6 className="font-semibold text-sm">24/7 Support</h6>
								<p className="text-xs text-gray-400">Always here to help</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom Bar */}
			<div className="border-t border-gray-800 bg-gray-950">
				<div className="container mx-auto px-4 py-4">
					<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
						<div className="flex items-center space-x-4 text-sm text-gray-400">
							<span>&copy; {currentYear} EShop. All rights reserved.</span>
							<span className="hidden md:inline">|</span>
							<div className="hidden sm:flex items-center space-x-1">
								<span>Made with</span>
								<Heart className="w-4 h-4 text-red-500 fill-current" />
								<span>by Jayesh</span>
							</div>
						</div>
					</div>

					<div className="flex flex-wrap justify-center md:justify-start mt-4 pt-4 border-t border-gray-800 space-x-6 text-xs text-gray-500">
						<a
							href="#"
							className="hover:text-blue-400 transition-colors duration-300"
						>
							Privacy Policy
						</a>
						<a
							href="#"
							className="hover:text-blue-400 transition-colors duration-300"
						>
							Terms of Service
						</a>
						<a
							href="#"
							className="hover:text-blue-400 transition-colors duration-300"
						>
							Cookie Policy
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
