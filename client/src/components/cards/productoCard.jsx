import { IoCartSharp } from "react-icons/io5";
import "../../styles/productoCard.css";
import { useCart } from "../../context/carritoContext"; // Asegurate de que la ruta sea correcta

export default function ProductoCard({ producto }) {
	const { addProduct } = useCart();

	return (
		<div className="producto-card">
			<div className="card-inner">
				{/* Badge */}
				<div className="stock-badge">EN STOCK</div>

				{/* Imagen */}
				<img src={producto.imagen} alt={producto.nombre} className="card-img" />

				{/* Info */}
				<h3 className="card-title">{producto.nombre}</h3>
				<p className="card-subtitle">Inalámbrico</p>

				{/* Llega mañana */}
				<span className="card-envio">Llega mañana</span>

				{/* Precio y carrito */}
				<div className="card-footer">
					<div className="precio">
						<p className="monto">
							${Number(producto.precio).toLocaleString("es-AR")}
						</p>
						<p className="especial">Precio Especial</p>
					</div>
					<button
						className="carrito-btn"
						onClick={() =>
							addProduct({
								id: producto.id,
								name: producto.nombre,
								price: Number(producto.precio),
								image: producto.imagen,
								quantity: 1,
							})
						}
						aria-label={`Agregar ${producto.nombre} al carrito`}>
						<IoCartSharp size={24} />
					</button>
				</div>
			</div>
		</div>
	);
}
