const transactionsModel = require("../../db/Models/transactionsModel")
exports.updateTransaction = async (req, res) => {
    const new_vals = ({ title, amount, description, date, type } = req.body);
    try {
      
      doc = await transactionsModel.findById(req.params.id);
    } catch (error) {
      res.json({msg: "item not found"})
      return
    }

    try {
      updatedItem = await transactionsModel.findOneAndUpdate(doc, new_vals, {
        returnDocument: "after",
      });
      res.json({
        msg: "item updated successfully",
        updatedItem,
      });
    } catch (error) {
      res.status(500).json({
        msg: "item found but not updated",
      });
    }
  };