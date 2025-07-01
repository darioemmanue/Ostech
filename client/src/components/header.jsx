import { useState, useRef } from "react";
import { ShearchBar } from "./searchBar";
import { FaUser, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function Header() {
	const [openMegaMenu, setOpenMegaMenu] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const timeoutRef = useRef(null);

	const handleMouseEnter = () => {
		clearTimeout(timeoutRef.current);
		setOpenMegaMenu(true);
	};

	const handleMouseLeave = () => {
		timeoutRef.current = setTimeout(() => {
			setOpenMegaMenu(false);
		}, 100);
	};

	const megaVariants = {
		hidden: { opacity: 0, y: -10 },
		visible: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
	};

	const mobileMenuVariants = {
		hidden: { x: "100%" },
		visible: { x: 0 },
		exit: { x: "100%" },
	};

	const navItems = [
		"PRODUCTOS",
		"PC’S EN OFERTA",
		"LAS MÁS VENDIDAS",
		"ARMA TU PC",
		"STOCK INMEDIATO",
		"EMPRESAS",
	];

	return (
		<>
			{/* Header */}
			<header className="bg-gradient-to-r from-black via-gray-900 to-black w-full h-20 shadow-lg px-4 sm:px-6 text-white z-50 relative">
				<div className="flex items-center justify-between h-full max-w-7xl mx-auto">
					{/* Logo */}
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2, duration: 0.5 }}
						className="flex items-center">
						<img
							src="/Logo/ostechlogoFinal-transparente.png"
							alt="Logo"
							className="w-28 sm:w-36 object-contain drop-shadow"
						/>
					</motion.div>

					{/* Buscador */}
					<motion.div
						initial={{ scale: 0.95, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ delay: 0.4, duration: 0.5 }}
						className="hidden md:block w-[500px] max-w-full">
						<div className="bg-white text-black rounded-full overflow-hidden shadow-md hover:shadow-xl ring-1 ring-gray-200 transition">
							<ShearchBar />
						</div>
					</motion.div>

					{/* Botones */}
					<div className="flex items-center space-x-4">
						{/* Menú hamburguesa */}
						<button
							onClick={() => setMenuOpen(true)}
							className="md:hidden p-2 focus:outline-none">
							<FaBars size={22} />
						</button>

						{/* Botones solo visibles en md+ */}
						<motion.div
							className="hidden md:flex items-center space-x-4"
							initial={{ x: 50, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ delay: 0.6, duration: 0.5 }}>
							<Link to="/login">
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.97 }}
									className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-400 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow hover:shadow-lg transition">
									<FaUser />
									<span>Iniciar sesión</span>
								</motion.button>
							</Link>
							<motion.button
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.95 }}
								className="bg-white p-2 rounded-full shadow text-black hover:bg-gray-200 transition">
								<FaShoppingCart size={20} />
							</motion.button>
						</motion.div>
					</div>
				</div>
			</header>

			{/* Mega menú visible solo en desktop */}
			<nav className="hidden md:block bg-black text-white w-full shadow-inner border-b border-gray-800">
				<motion.ul
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.8, duration: 0.5 }}
					className="max-w-7xl mx-auto flex justify-center space-x-12 py-2 text-sm font-semibold tracking-widest">
					{navItems.map((item, i) => (
						<li
							key={item}
							className={`cursor-pointer hover:text-purple-400 transition relative ${
								item === "PRODUCTOS" ? "group" : ""
							}`}
							onMouseEnter={item === "PRODUCTOS" ? handleMouseEnter : undefined}
							onMouseLeave={
								item === "PRODUCTOS" ? handleMouseLeave : undefined
							}>
							{item}
						</li>
					))}
				</motion.ul>

				<AnimatePresence>
					{openMegaMenu && (
						<motion.div
							initial="hidden"
							animate="visible"
							exit="exit"
							variants={megaVariants}
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
							className="fixed top-[80px] left-0 w-full bg-black bg-opacity-95 border-t border-gray-700 shadow-2xl z-50">
							<div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
								{/* Categorías: COMPONENTES, PERIFÉRICOS, MÁS */}
								{[
									{
										titulo: "COMPONENTES",
										items: [
											"Procesadores",
											"Motherboards",
											"Memorias",
											"Placas de Video",
											"Discos SSD",
											"Discos HDD",
											"Fuentes",
											"Coolers",
											"Gabinetes Gamer",
										],
									},
									{
										titulo: "PERIFÉRICOS",
										items: [
											"Mouses",
											"Teclados",
											"Auriculares",
											"Webcams",
											"Micrófonos",
										],
									},
									{
										titulo: "MÁS PRODUCTOS",
										items: [
											"Notebooks",
											"Sillas Gamer y Escritorios Gamer",
											"Monitores",
											"UPS y Estabilizadores",
											"Parlantes",
											"Conectividad",
										],
									},
								].map(({ titulo, items }) => (
									<div key={titulo}>
										<h4 className="text-purple-400 font-bold mb-4 text-lg">
											{titulo}
										</h4>
										<ul className="space-y-2 text-sm">
											{items.map((it) => (
												<li
													key={it}
													className="cursor-pointer hover:text-purple-300 transition">
													{it}
												</li>
											))}
										</ul>
									</div>
								))}
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</nav>

			{/* Menú lateral mobile */}
			<AnimatePresence>
				{menuOpen && (
					<motion.div
						initial="hidden"
						animate="visible"
						exit="exit"
						variants={mobileMenuVariants}
						transition={{ duration: 0.3 }}
						className="fixed top-0 right-0 w-72 sm:w-80 h-full bg-black text-white z-[999] shadow-lg p-6 overflow-y-auto">
						<div className="flex justify-between items-center mb-6">
							<h2 className="text-lg font-bold">Menú</h2>
							<button onClick={() => setMenuOpen(false)}>
								<FaTimes size={20} />
							</button>
						</div>

						<ul className="space-y-4 font-semibold text-sm">
							{navItems.map((item) => (
								<li key={item} className="hover:text-purple-400 cursor-pointer">
									{item}
								</li>
							))}
						</ul>

						<hr className="my-6 border-gray-700" />

						{/* Acciones del usuario en mobile */}
						<div className="space-y-4">
							<Link to="/login" onClick={() => setMenuOpen(false)}>
								<button className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-full text-sm">
									<FaUser />
									Iniciar sesión
								</button>
							</Link>

							<button className="w-full flex items-center justify-center gap-2 bg-white text-black hover:bg-gray-200 py-2 px-4 rounded-full text-sm">
								<FaShoppingCart />
								Ver carrito
							</button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
