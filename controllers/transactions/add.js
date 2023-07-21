const transactionsModel = require("../../db/Models/transactionsModel")
exports.addTransaction = async (req, res) => {
    const data = ({ title, amount, date, description, type } = req.body);
    let item = transactionsModel(data);
    console.log(typeof item);
    try {
      item = await item.save();
      res.json({ msg: "transaction added successfully", id: item._id });
    } catch (error) {
      res.json({
        msg: "error occured",
        error: error.message,
      });
    }
  };