import { motion, AnimatePresence } from "framer-motion";
import { FaTrashAlt, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/carritoContext.jsx";
import { Link } from "react-router-dom";

export default function CartPage() {
	const { products, removeProduct, changeQuantity, subtotal, tax, total } =
		useCart();

	return (
		<main className="bg-gradient-to-b from-black via-zinc-900 to-black text-white min-h-screen px-6 py-12 font-sans">
			<motion.h1
				initial={{ opacity: 0, y: -30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="text-5xl font-extrabold mb-14 text-purple-400 tracking-tight text-center">
				Carrito de Compras
			</motion.h1>

			{products.length === 0 ? (
				<section className="flex flex-col items-center justify-center min-h-[60vh] text-center">
					<FaShoppingCart className="text-6xl text-purple-500 mb-6 animate-pulse" />
					<p className="text-xl text-gray-400 italic">
						No tienes productos en el carrito.
					</p>
					<Link to="/" className="mt-6">
						<button className="bg-purple-600 hover:bg-purple-700 transition-all px-6 py-3 rounded-xl text-white font-semibold shadow-md hover:shadow-lg">
							Explorar productos
						</button>
					</Link>
				</section>
			) : (
				<div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
					<motion.div
						layout
						className="flex-1 bg-zinc-900 rounded-3xl p-10 shadow-2xl shadow-purple-800/20">
						<h2 className="text-2xl font-semibold mb-8 text-purple-300 border-b border-zinc-700 pb-4">
							Tus Productos
						</h2>
						<AnimatePresence>
							{products.map(({ id, name, price, quantity, image }) => (
								<motion.div
									key={id}
									layout
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: 20 }}
									transition={{ duration: 0.3 }}
									className="flex items-center mb-8 border-b border-zinc-800 pb-6 last:border-none">
									<img
										src={image}
										alt={name}
										className="w-24 h-24 object-contain mr-6 rounded-xl bg-zinc-950 p-2 shadow-md"
									/>
									<div className="flex-1">
										<p className="font-semibold text-lg">{name}</p>
										<p className="text-purple-400 font-bold mt-1">
											${price.toFixed(2)}
										</p>
									</div>
									<input
										type="number"
										min="1"
										value={quantity}
										onChange={(e) => changeQuantity(id, Number(e.target.value))}
										className="w-20 text-center bg-zinc-800 text-white rounded-lg border border-gray-600 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
									/>
									<button
										onClick={() => removeProduct(id)}
										className="ml-4 text-red-500 hover:text-red-600 transition"
										aria-label={`Eliminar ${name}`}>
										<FaTrashAlt size={20} />
									</button>
								</motion.div>
							))}
						</AnimatePresence>
					</motion.div>

					<motion.div
						layout
						className="w-full lg:w-96 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 rounded-3xl p-10 shadow-2xl shadow-purple-900/40">
						<h2 className="text-2xl font-semibold mb-8 text-white border-b border-purple-500 pb-4">
							Resumen del Pedido
						</h2>
						<div className="space-y-4 text-lg text-gray-200">
							<div className="flex justify-between">
								<span>Subtotal</span>
								<span>${subtotal.toFixed(2)}</span>
							</div>
							<div className="flex justify-between">
								<span>Impuestos (21%)</span>
								<span>${tax.toFixed(2)}</span>
							</div>
						</div>
						<div className="flex justify-between text-xl font-bold text-white mt-8 pt-5 border-t border-purple-400">
							<span>Total</span>
							<span>${total.toFixed(2)}</span>
						</div>

						<button className="w-full bg-purple-600 hover:bg-purple-700 transition-all py-4 mt-10 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl shadow-purple-800/60">
							Pagar ahora
						</button>

						<Link to="/" className="block mt-4">
							<button className="w-full bg-transparent border border-purple-400 hover:border-purple-300 text-purple-300 hover:text-white transition-all py-3 rounded-xl font-medium">
								Seguir comprando
							</button>
						</Link>
					</motion.div>
				</div>
			)}
		</main>
	);
}
