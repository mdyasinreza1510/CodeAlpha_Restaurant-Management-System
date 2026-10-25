const express = require ('express');
const app = express();

const menuRoutes = require("./routes/menu.routes");

const orderRoutes = require("./routes/order.routes");

const inventoryRoutes = require("./routes/inventory.routes");





app.use("/api/menu", menuRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/inventory", inventoryRoutes);



module.exports = app
