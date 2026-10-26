const reservationModel = require("../models/reservation.model");
const tableModel = require("../models/table.model");

const reserveTable = async (req, res) => {
  try {
    const { customerName, table, reservationTime } = req.body;

    const selectedTable = await tableModel.findById(table);

    if (!selectedTable.isAvailable) {
      return res.status(400).json({
        message: "Table is not available",
      });
    }

    const reservation = await reservationModel.create({
      customerName,
      table,
      reservationTime,
    });

    selectedTable.isAvailable = false;
    await selectedTable.save();

    res.status(201).json({
      message: "Table reserved successfully",
      reservation,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  reserveTable,
};