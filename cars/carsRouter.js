const express = require("express");

const db = require("../data/db-config");

const router = express.Router();

router.get("/", async (req, res) => {
	try {
		const cars = await db("cars");
		res.status(200).json(cars);
	} catch (error) {
		res.status(500).json({ errorMessage: "Error fetching cars" });
	}
});

router.post("/", async (req, res) => {
	const newCar = req.body;

	try {
		const [newCarId] = await db("cars").insert(newCar);
		const createdCar = await db("cars").where({ id: newCarId }).first();
		res.status(200).json(createdCar);
	} catch (error) {
		res.status(500).json({ errorMessage: "Error creating new car" });
	}
});

module.exports = router;
