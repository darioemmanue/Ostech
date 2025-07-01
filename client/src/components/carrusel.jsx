import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const productos = [
	{ id: 1, nombre: "Placa de video RTX 3060", imagen: "/images/placa.png" },
	{ id: 2, nombre: "Teclado Mecánico RGB", imagen: "/images/teclado.png" },
	{ id: 3, nombre: "Monitor Curvo 27''", imagen: "/images/monitor.png" },
	{ id: 4, nombre: "Gabinete Gamer", imagen: "/images/gabinete.png" },
	{ id: 5, nombre: "Gabinete Gamer", imagen: "/images/gabinete.png" },
	{ id: 6, nombre: "Gabinete Gamer", imagen: "/images/gabinete.png" },
	{ id: 7, nombre: "Gabinete Gamer", imagen: "/images/gabinete.png" },
	{ id: 8, nombre: "Gabinete Gamer", imagen: "/images/gabinete.png" },
	{ id: 9, nombre: "Gabinete Gamer", imagen: "/images/gabinete.png" },
];

const Carrusel = () => {
	return (
		<section className="max-w-7xl mx-auto px-4 md:px-10 py-12">
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="text-center text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 text-transparent bg-clip-text mb-6">
				Lo más nuevo
			</motion.h2>

			<Swiper
				slidesPerView={1}
				spaceBetween={20}
				breakpoints={{
					640: { slidesPerView: 1 },
					768: { slidesPerView: 2 },
					1024: { slidesPerView: 3 },
				}}
				autoplay={{ delay: 2800 }}
				pagination={{ clickable: true }}
				navigation
				modules={[Autoplay, Pagination, Navigation]}
				className="py-4">
				{productos.map((item) => (
					<SwiperSlide key={item.id}>
						<motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							whileInView={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.4 }}
							className="bg-gradient-to-br from-[#2e2e2e] via-[#1c1c1c] to-[#141414] border border-purple-500 rounded-2xl shadow-xl p-5 text-center hover:scale-[1.04] transition-all duration-300 ">
							<img
								src={item.imagen}
								alt={item.nombre}
								className="w-24 h-24 object-contain mx-auto mb-3"
								onError={(e) => {
									e.target.onerror = null;
									e.target.src =
										"https://via.placeholder.com/100x100?text=Imagen";
								}}
							/>
							<p className="px-auto py-auto  text-sm text-gray-100 font-semibold">
								{item.nombre}
							</p>
						</motion.div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default Carrusel;
