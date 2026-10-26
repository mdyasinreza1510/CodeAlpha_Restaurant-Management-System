const express = require ('express');
const app = express();

const menuRoutes = require("./routes/menu.routes");

const orderRoutes = require("./routes/order.routes");

const inventoryRoutes = require("./routes/inventory.routes");

const reservationRoutes = require("./routes/reservation.routes");



app.use("/api/menu", menuRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/inventory", inventoryRoutes);
app.use("/api/reservation", reservationRoutes);


module.exports = app
