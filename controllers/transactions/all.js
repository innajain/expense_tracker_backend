const transactionsModel = require("../../db/Models/transactionsModel");

exports.getAllTransactions = async (req, res) => {
  try {
    const lst = await transactionsModel.find().sort({ date: -1 });
    res.json(
      lst.map((item) => {
        return {
          title:item.title, date:item.date_text
        }
      })
    );
  } catch (error) {
    console.log("Database Error");
  }
};
