const express = require("express");

const app = express();

// Middleware
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
	res.send("esta ok");
});

// Start server
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
