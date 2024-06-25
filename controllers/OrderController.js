const { Order } = require("../models");

const getOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({
      attributes: [
        "id",
        "nama",
        "nohp",
        "alamat",
        "merch_id",
        "qty",
      ],
    });

    res.status(200).json({
      status: true,
      message: 'Order successfully retrived',
      data: orders
    });

  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message
    });
  }
}

module.exports = {
  getOrders
}