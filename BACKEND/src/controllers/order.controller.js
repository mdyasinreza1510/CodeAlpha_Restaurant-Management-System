const orderModel = require("../models/order.model");
const inventoryModel = require("../models/inventory.model");

const placeOrder = async (req, res) => {
  try {
    const { menuItem, quantity, table } = req.body;

    const order = await orderModel.create({
      menuItem,
      quantity,
      table,
    });


    const inventory = await inventoryModel.findOne();

    if (inventory) {
      inventory.stock = inventory.stock - quantity;
      await inventory.save();
    }

    res.status(201).json({
      message: "Order placed successfully",
      order,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  placeOrder,
};