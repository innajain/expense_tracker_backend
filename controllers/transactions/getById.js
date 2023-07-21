const transactionsModel = require("../../db/Models/transactionsModel");
exports.getTransactionByID = async (req, res) => {
  try {
    const item = await transactionsModel.findById(req.params.id);
    if (item != null) res.json(item);
  } catch (error) {
    res.status(400).json({
      msg: "Item not found",
    });
  }
};
