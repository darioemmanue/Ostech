import { IoCartSharp } from "react-icons/io5";
import "../../styles/productoCard.css";

export default function ProductoCard({ producto }) {
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
						<p className="monto">${producto.precio.toLocaleString("es-AR")}</p>
						<p className="especial">Precio Especial</p>
					</div>
					<button className="carrito-btn">
						<IoCartSharp />
					</button>
				</div>
			</div>
		</div>
	);
}
