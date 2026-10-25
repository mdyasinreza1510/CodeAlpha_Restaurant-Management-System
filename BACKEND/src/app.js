const express = require ('express');



const app = express();

const menuRoutes = require("./routes/menu.routes");

const orderRoutes = require("./routes/order.routes");


app.use("/api/menu", menuRoutes);
app.use("/api/order", orderRoutes);



module.exports = app
