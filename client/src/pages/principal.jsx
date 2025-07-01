import Layout from "../pages/layout.jsx";
import { motion } from "framer-motion";
import Destacadas from "../components/destacadas.jsx";
import Carrusel from "../components/carrusel";
import ProductoCard from "../components/cards/productoCard.jsx";

function Principal() {
	const productos = [
		{ id: 1, nombre: "Auriculares Gaming", precio: 299.99, imagen: "/a.jpg" },
		{
			id: 2,
			nombre: "RAM DDR4 16GB",
			precio: 89.99,
			imagen: "https://via.placeholder.com/150",
		},
		{
			id: 3,
			nombre: "Motherboard B550",
			precio: 159.99,
			imagen: "https://via.placeholder.com/150",
		},
		{
			id: 4,
			nombre: "SSD NVMe 1TB",
			precio: 109.99,
			imagen: "https://via.placeholder.com/150",
		},
	];

	return (
		<Layout>
			{/* HERO */}
			<section className="relative text-white overflow-hidden min-h-[320px] sm:min-h-[360px] md:min-h-[400px] bg-black shadow-lg">
				{/* Imagen de fondo */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
					className="absolute inset-x-0 bottom-0 h-[140px] sm:h-[180px] md:h-[200px] -z-10 bg-no-repeat bg-bottom bg-contain"
					style={{
						backgroundImage: "url('/fondo-pres.png')",
						backgroundPosition: "bottom center",
						backgroundSize: "contain",
					}}
				/>

				{/* Degradado de fondo */}
				<div className="absolute inset-0 -z-20 bg-gradient-to-b from-black/90 via-black/60 to-black/95" />

				{/* Contenido */}
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between relative z-10">
					{/* Texto principal */}
					<motion.div
						initial={{ x: -60, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.9, ease: "easeOut" }}
						className="max-w-xl text-center md:text-left">
						<h2 className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-purple-400 mb-2 drop-shadow">
							los componentes que
						</h2>
						<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-fuchsia-500 to-indigo-400 drop-shadow-[0_0_20px_rgba(139,99,230,0.4)] mb-4">
							buscas
						</h1>
						<p className="text-sm sm:text-base md:text-lg text-purple-200 tracking-wide leading-relaxed drop-shadow">
							Motherboards, procesadores, RAM <br className="hidden sm:block" />
							y mucho más.
						</p>
					</motion.div>

					{/* Imagen derecha */}
					<motion.div
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
						className="mt-10 md:mt-0 w-32 sm:w-40 md:w-56 lg:w-64">
						<img
							src="/amd-ryzen-box.png"
							alt="Producto Ryzen"
							className="w-full object-contain drop-shadow-[0_20px_30px_rgba(139,99,230,0.5)]"
						/>
					</motion.div>
				</div>
			</section>

			{/* DESTACADAS */}
			<section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
				<Destacadas />
			</section>

			{/* CARRUSEL */}
			<section className="pb-12 sm:pb-14 md:pb-16 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
				<Carrusel />
			</section>

			{/* PRODUCTOS */}
			<section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-10 max-w-7xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center md:text-left">
					Productos
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
					{productos.map((producto) => (
						<ProductoCard key={producto.id} producto={producto} />
					))}
				</div>
			</section>
		</Layout>
	);
}

export default Principal;
