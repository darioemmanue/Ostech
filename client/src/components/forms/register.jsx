import React from "react";
import {
	FaGoogle,
	FaFacebookF,
	FaEnvelope,
	FaLock,
	FaUser,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Register() {
	return (
		<div className="flex flex-col md:flex-row h-screen w-full font-sans bg-black text-white">
			{/* Lado derecho */}
			<div
				className="hidden md:flex w-full md:w-7/12 bg-cover bg-center relative"
				style={{ backgroundImage: "url('/set.png')" }}>
				<div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white p-6 text-center">
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.6 }}>
						<h1 className="text-4xl font-bold mb-2">¡Bienvenido!</h1>
						<p className="text-lg">Si Ya tienes una cuenta</p>
						<p className="mb-6 text-lg">Ingresa.</p>

						<Link to={"/login"}>
							{/* Botón Registrarse */}
							<div className="relative group inline-flex">
								<div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00d4c4] to-[#00a8ff] opacity-50 blur-md group-hover:opacity-80 transition duration-500"></div>
								<a
									href="#"
									className="relative z-10 bg-[#00809A] hover:bg-[#00B3A4] text-white font-semibold px-8 py-3 rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-cyan-500/30 inline-flex items-center">
									iniciar sesión
									<svg
										aria-hidden="true"
										viewBox="0 0 10 10"
										height="10"
										width="10"
										fill="none"
										className="ml-2 stroke-white stroke-2">
										<path
											d="M0 5h7"
											className="transition opacity-0 group-hover:opacity-100"
										/>
										<path
											d="M1 1l4 4-4 4"
											className="transition group-hover:translate-x-[3px]"
										/>
									</svg>
								</a>
							</div>
						</Link>
					</motion.div>
				</div>
			</div>

			<div className="w-full md:w-5/12 flex items-center justify-center px-6 md:px-12">
				<motion.div
					className="w-full max-w-sm space-y-6"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}>
					{/* Logo */}
					<img
						src="/Logo/ostechlogoFinal-transparente.png"
						alt="Logo"
						className="w-60 mx-auto mb-1 mt-2"
					/>

					<h2 className="text-2xl font-semibold text-center mb-5 mt-15">
						Iniciar Sesión
					</h2>

					<div className="px-5 py-10 space-y-4 gap-4">
						<div className="relative flex items-center border border-gray-600 rounded-md bg-white/10 text-white px-3 py-2 focus-within:border-cyan-400 transition">
							<FaUser className="text-cyan-400 mr-3" />
							<input
								type="text"
								placeholder="Usuario"
								className="bg-transparent w-full text-sm focus:outline-none placeholder:text-gray-400"
								required
							/>
						</div>

						<div className="relative flex items-center border border-gray-600 rounded-md bg-white/10 text-white px-3 py-2 focus-within:border-cyan-400 transition">
							<FaEnvelope className="text-cyan-400 mr-3" />
							<input
								type="email"
								placeholder="Correo electrónico"
								className="bg-transparent w-full text-sm focus:outline-none placeholder:text-gray-400"
								required
							/>
						</div>

						<div className="relative flex items-center border border-gray-600 rounded-md bg-white/10 text-white px-3 py-2 focus-within:border-cyan-400 transition">
							<FaLock className="text-cyan-400 mr-3" />
							<input
								type="password"
								placeholder="Contraseña"
								className="bg-transparent w-full text-sm focus:outline-none placeholder:text-gray-400"
								required
							/>
						</div>

						<Link to={"/login"}>
							<div className="block md:hidden text-center text-sm text-gray-400 mb-4">
								¿Ya tienes cuenta?{" "}
								<a href="#" className="text-cyan-400 hover:underline">
									Inciar Sesión
								</a>
							</div>
						</Link>

						<motion.button
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.97 }}
							className="w-full py-2 bg-gradient-to-r from-cyan-500 to-teal-400 text-white rounded-md font-medium shadow-md hover:shadow-cyan-500/20 transition">
							Registrarse
						</motion.button>
					</div>
				</motion.div>
			</div>
		</div>
	);
}
