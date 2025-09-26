const FormInput = ({
	label,
	name,
	type = "text",
	value,
	onChange,
	required = false,
	placeholder,
	...props
}) => {
	return (
		<div className="space-y-1">
			<label className="block text-sm font-medium text-gray-700">
				{label} {required && <span className="text-red-500">*</span>}
			</label>
			{type === "textarea" ? (
				<textarea
					name={name}
					value={value}
					onChange={onChange}
					placeholder={placeholder}
					required={required}
					className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors "border-gray-300`}
					{...props}
				/>
			) : (
				<input
					type={type}
					name={name}
					value={value}
					onChange={onChange}
					placeholder={placeholder}
					required={required}
					className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors border-gray-300`}
					{...props}
				/>
			)}
		</div>
	);
};

export default FormInput;
