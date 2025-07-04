import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import ProductoCard from "../components/cards/productoCard.jsx";

const productos = [
	{
		id: 1,
		nombre: "Auriculares Gaming",
		precio: 299.99,
		imagen: "https://via.placeholder.com/100",
	},
	{
		id: 2,
		nombre: "RAM DDR4 16GB",
		precio: 89.99,
		imagen: "https://via.placeholder.com/100",
	},
	{
		id: 3,
		nombre: "Teclado Logitech K270",
		precio: 20599,
		imagen: "https://via.placeholder.com/100",
	},
	{
		id: 4,
		nombre: 'Monitor 24" Full HD',
		precio: 14999,
		imagen: "https://via.placeholder.com/100",
	},
	{
		id: 5,
		nombre: "Mouse Gamer Razer",
		precio: 5999,
		imagen: "https://via.placeholder.com/100",
	},
	{
		id: 6,
		nombre: "Disco SSD 1TB",
		precio: 12000,
		imagen: "https://via.placeholder.com/100",
	},
	{
		id: 7,
		nombre: "Placa de Video NVIDIA RTX 3060",
		precio: 89999,
		imagen: "https://via.placeholder.com/100",
	},
	{
		id: 8,
		nombre: "Fuente de Poder 650W",
		precio: 7999,
		imagen: "https://via.placeholder.com/100",
	},
	{
		id: 9,
		nombre: "Gabinete ATX Mid Tower",
		precio: 4999,
		imagen: "https://via.placeholder.com/100",
	},
	{
		id: 10,
		nombre: "Procesador Intel i7 12700K",
		precio: 69999,
		imagen: "https://via.placeholder.com/100",
	},
];

export default function CarruselProductos() {
	return (
		<div className="w-full px-4 py-8">
			<Swiper
				modules={[Navigation]}
				spaceBetween={12}
				slidesPerView={0}
				slidesPerGroup={1}
				navigation
				breakpoints={{
					640: { slidesPerView: 2.2 },
					768: { slidesPerView: 3.2 },
					1024: { slidesPerView: 4.2 },
				}}
				style={{ paddingBottom: "50px" }} // para espacio a botones de navegación
			>
				{productos.map((producto) => (
					<SwiperSlide key={producto.id}>
						<ProductoCard producto={producto} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
