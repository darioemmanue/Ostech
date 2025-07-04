import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
	const [products, setProducts] = useState([]);

	const addProduct = (productToAdd) => {
		// Normalizar campos para evitar errores
		const product = {
			id: productToAdd.id,
			name: productToAdd.name || productToAdd.nombre || "Producto",
			price: Number(productToAdd.price || productToAdd.precio || 0),
			image: productToAdd.image || productToAdd.imagen || "",
			quantity: 1,
		};

		setProducts((prev) => {
			const existing = prev.find((p) => p.id === product.id);
			if (existing) {
				return prev.map((p) =>
					p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
				);
			}
			return [...prev, product];
		});
	};

	const removeProduct = (id) => {
		setProducts((prev) => prev.filter((p) => p.id !== id));
	};

	const changeQuantity = (id, qty) => {
		setProducts((prev) =>
			prev.map((p) =>
				p.id === id ? { ...p, quantity: Math.max(1, Number(qty)) } : p
			)
		);
	};

	const subtotal = products.reduce(
		(acc, p) => acc + Number(p.price) * p.quantity,
		0
	);
	const tax = subtotal * 0.21;
	const total = subtotal + tax;

	return (
		<CartContext.Provider
			value={{
				products,
				addProduct,
				removeProduct,
				changeQuantity,
				subtotal,
				tax,
				total,
			}}>
			{children}
		</CartContext.Provider>
	);
}

export function useCart() {
	const context = useContext(CartContext);
	if (!context)
		throw new Error("useCart debe usarse dentro de un CartProvider");
	return context;
}
