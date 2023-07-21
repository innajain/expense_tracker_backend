const transactionsModel = require("../../db/Models/transactionsModel")
exports.deleteTransaction = async (req, res) => {
    const { id } = req.body;
    transactionsModel
      .findByIdAndDelete(id)
      .then((income) => {
        if (income)
          res.status(200).json({ message: "item Deleted", item: income });
        else res.status(400).json({ message: "item does not exist" });
      })
      .catch((err) => {
        res.status(500).json({ message: "Server Error", error: err });
      });
  };