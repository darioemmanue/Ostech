import { motion } from "framer-motion";

export function ShearchBar() {
	return (
		<motion.div
			className="relative w-full"
			initial={{ opacity: 0, scale: 0.95 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.3 }}>
			<input
				type="search"
				name="search"
				placeholder="Buscar productos..."
				className="peer w-full pl-5 pr-12 py-3 rounded-full bg-white text-sm text-gray-800 placeholder-gray-400 shadow-md outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:shadow-lg"
			/>

			{/* Ícono lupa */}
			<div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
				<svg
					className="w-5 h-5 text-gray-400 peer-focus:text-blue-500 transition-colors"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 1 0-10.607 0 7.5 7.5 0 0 0 10.607 0Z"
					/>
				</svg>
			</div>
		</motion.div>
	);
}
