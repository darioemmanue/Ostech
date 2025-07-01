import { IoCartSharp } from "react-icons/io5";

const producto = {
	id: 1,
	nombre: "Producto 1",
	precio: 29.99,
	imagen: "https://via.placeholder.com/150",
};

export default function ProductoCard({ producto }) {
	return (
		<div className="p-[2px] rounded-xl bg-gradient-to-r from-[#c84bff] to-[#4bceff] transition duration-300 hover:from-[#b84bff] hover:to-[#3bceff]">
			<div className="bg-white rounded-xl px-2 py-10 flex flex-col items-center">
				<img
					src={producto.imagen}
					alt={producto.nombre}
					className="w-32 h-44 object-contain mb-2"
				/>
				<h3 className="text-center text-sm font-medium mb-1">
					{producto.nombre}
				</h3>
				<div className="flex items-center justify-between w-50 mt-5">
					<span className="text-green-600 font-semibold mb-2">
						${producto.precio.toLocaleString("es-AR")}
					</span> 
					<button className="text-gray-700 hover:text-green-500 text-xl w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200">
						<IoCartSharp />
					</button>
				</div>
			</div>
		</div>
	);
}
