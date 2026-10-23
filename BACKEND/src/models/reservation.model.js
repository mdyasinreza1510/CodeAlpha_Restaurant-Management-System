const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
    },

    table: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Table",
      required: true,
    },

    reservationTime: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const reservationModel = mongoose.model(
  "Reservation",
  reservationSchema
);

module.exports = reservationModel;