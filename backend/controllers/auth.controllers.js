import pool from "../server/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const loginUser = async (req, res) => {
	try {
		const { mail, contraseña } = req.body;

		const [rows] = await pool.query("SELECT * FROM usuarios WHERE mail = ?", [
			mail,
		]);

		if (rows.length === 0) {
			return res.status(404).json({ error: "Usuario no encontrado" });
		}

		const usuario = rows[0];

		const match = await bcrypt.compare(contraseña, usuario.contraseña);
		if (!match) {
			return res.status(401).json({ error: "Contraseña incorrecta" });
		}

		const token = jwt.sign(
			{ id: usuario.id, mail: usuario.mail, rol: usuario.rol },
			process.env.JWT_SECRET || "secreto123",
			{ expiresIn: "1h" }
		);

		res.json({ mensaje: "Login exitoso", token });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Error al iniciar sesión" });
	}
};
