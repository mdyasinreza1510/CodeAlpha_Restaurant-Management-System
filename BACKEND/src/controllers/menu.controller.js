const menuModel = require("../models/menu.model");

const getMenu = async (req, res) => {
  try {
    const menu = await menuModel.find();

    res.status(200).json({
      message: "Menu fetched successfully",
      menu,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  getMenu,
};