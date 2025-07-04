import { useState } from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Principal from "./pages/principal.jsx";
import Login from "./components/forms/login.jsx";
import Register from "./components/forms/register.jsx";
import Carrito from "./pages/carrito.jsx";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Principal />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/carrito" element={<Carrito />} />
			</Routes>
		</Router>
	);
}
export default App;
