import { motion } from "framer-motion";
import {
	FaEnvelope,
	FaPhone,
	FaMapMarkerAlt,
	FaInstagram,
	FaCommentDots,
} from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-black text-white py-8 px-6 md:px-16 mt-8">
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
				{/* Columna izquierda: Contacto */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="space-y-4">
					<h2 className="text-xl font-semibold">¡Contáctanos!</h2>

					<div className="flex items-center space-x-2">
						<FaEnvelope className="text-cyan-400" />
						<span>Vía E-mail</span>
					</div>
					<a
						href="mailto:contacto@ostech.com"
						className="text-cyan-400 hover:underline ml-6 block">
						contacto@ostech.com
					</a>

					<div className="flex items-center space-x-2">
						<FaPhone className="text-cyan-400" />
						<span>Por teléfono</span>
					</div>
					<a
						href="tel:1112345678"
						className="text-cyan-400 hover:underline ml-6 block">
						11 1234-5678
					</a>

					<div className="flex items-start space-x-2">
						<FaMapMarkerAlt className="text-cyan-400 mt-1" />
						<p className="ml-1">
							Albert Schweitzer 1381, <br />
							B1714 Ituzaingó, <br />
							Provincia de Buenos Aires.
						</p>
					</div>

					{/* Íconos de redes */}
					<div className="flex items-center space-x-4 mt-4 text-2xl">
						<FaCommentDots className="hover:text-cyan-400 cursor-pointer" />
						<FaInstagram className="hover:text-cyan-400 cursor-pointer" />
					</div>

					{/* Mapa (imagen ejemplo) */}
					<img
						src="/ruta-a-tu-mapa.png" // Reemplaza con tu imagen o componente de mapa
						alt="Mapa"
						className="rounded-lg w-full max-w-xs mt-4"
					/>
				</motion.div>

				{/* Columna derecha: Ayuda */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true }}>
					<h2 className="text-xl font-semibold mb-4">Ayuda</h2>
					<ul className="space-y-3 text-gray-300">
						<li>
							<a href="#" className="hover:text-white hover:underline">
								Preguntas frecuentes
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-white hover:underline">
								Políticas de devoluciones y reembolsos
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-white hover:underline">
								Política de privacidad
							</a>
						</li>
						<li>
							<a href="#" className="hover:text-white hover:underline">
								Mi cuenta
							</a>
						</li>
					</ul>
				</motion.div>
			</div>

			{/* Copyright */}
			<p className="text-center text-gray-500 mt-8 text-sm">
				© {new Date().getFullYear()} OSTECH. Todos los derechos reservados.
			</p>
		</footer>
	);
};

export default Footer;
