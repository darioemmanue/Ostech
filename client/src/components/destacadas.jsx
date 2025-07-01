import { motion } from "framer-motion";

const productosDestacados = [
	{
		id: 1,
		nombre: "Auriculares con micrófono",
		imagen: "/a.jpg",
	},
	{
		id: 2,
		nombre: "AirPods",
		imagen: "/a.jpg",
	},
	{
		id: 3,
		nombre: "Motherboard MSI A520M",
		imagen: "/a.jpg",
	},
];

const Destacadas = () => {
	return (
		<section className="py-10 px-4 md:px-10 max-w-7xl mx-auto ">
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.6 }}
				className="rounded-2xl bg-gradient-to-r from-purple-500 via-pink-400 to-blue-400 p-[3px] shadow-lg mb-8">
				<div className=" rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
					{/* Columna izquierda: título y botón */}
					<motion.div
						initial={{ opacity: 0, x: -40 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.7 }}
						className="flex flex-col items-center md:items-start text-center md:text-left min-w-[200px]">
						<h2 className="text-xl md:text-2xl font-extrabold text-black mb-3 tracking-tight">
							OFERTAS DESTACADAS
						</h2>
						<button className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold px-5 py-2 rounded-md shadow-md transition duration-300">
							VER MÁS
						</button>
					</motion.div>

					{/* Columna derecha: productos */}
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
						{productosDestacados.map((producto, index) => (
							<motion.div
								key={producto.id}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.2 }}
								className="bg-white rounded-xl p-5 border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.03] hover:bg-gray-50 flex flex-col items-center text-center">
								<img
									src={producto.imagen}
									alt={producto.nombre}
									className="w-24 h-24 object-contain mb-3"
									onError={(e) => {
										e.target.onerror = null;
										e.target.src =
											"https://via.placeholder.com/100x100?text=Imagen";
									}}
								/>
								<p className="text-sm md:text-base font-medium text-gray-800">
									{producto.nombre}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</motion.div>
		</section>
	);
};

export default Destacadas;
