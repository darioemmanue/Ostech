import { useState } from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Principal from "./pages/principal.jsx";
import Login from "./components/forms/login.jsx";
import Register from "./components/forms/register.jsx";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Principal />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</Router>
	);
}
export default App;
