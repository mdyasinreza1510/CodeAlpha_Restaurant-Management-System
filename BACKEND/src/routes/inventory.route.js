const express = require("express");

const inventoryController = require("../controllers/inventory.controller");

const router = express.Router();

router.put("/:id",inventoryController.updateInventory);

module.exports = router;