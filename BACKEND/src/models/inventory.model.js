const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema(
  {
    itemName: {
      type: String,
      required: true,
    },

    stock: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const inventoryModel = mongoose.model("Inventory", inventorySchema);

module.exports = inventoryModel;