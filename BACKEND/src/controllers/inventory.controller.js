const inventoryModel = require("../models/inventory.model");

const updateInventory = async (req, res) => {
  try {
    const { id } = req.params;

    const inventory = await inventoryModel.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!inventory) {
      return res.status(404).json({
        message: "Inventory item not found",
      });
    }

    res.status(200).json({
      message: "Inventory updated successfully",
      inventory,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  updateInventory,
};