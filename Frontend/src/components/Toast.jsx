import { CheckCircle, X, XCircle } from "lucide-react";
import { useEffect } from "react";

const Toast = ({ type = "success", message, onClose, duration = 1000 }) => {
	// Auto dismiss after duration
	useEffect(() => {
		const timer = setTimeout(() => {
			onClose?.();
		}, duration);

		return () => clearTimeout(timer);
	}, [duration, onClose]);

	const styles = {
		success: {
			bg: "bg-green-100 border-green-400 text-green-700",
			icon: <CheckCircle className="w-5 h-5 text-green-600" />,
		},
		error: {
			bg: "bg-red-100 border-red-400 text-red-700",
			icon: <XCircle className="w-5 h-5 text-red-600" />,
		},
	};

	return (
		<div
			className={`flex items-center justify-between border px-4 py-3 rounded-lg shadow-md mb-2 w-80 animate-fade-in-up ${styles[type].bg}`}
		>
			<div className="flex items-center gap-2">
				{styles[type].icon}
				<span className="font-medium">{message}</span>
			</div>
			<button onClick={onClose}>
				<X className="w-5 h-5" />
			</button>
		</div>
	);
};

export default Toast;
