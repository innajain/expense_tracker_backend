const transactionsModel = require("../../db/Models/transactionsModel");
const { sendFailure, sendSuccess } = require("../../utils/sendStandardOutput");

exports.getTransactionByID = async (req, res) => {
  transactionsModel
    .findById(req.params.id)
    .then((item) => {
      if (item === null) sendFailure(res, 400, "Item not found.");
      else sendSuccess(res, 200, item);
    })
    .catch((err) => sendFailure(res, 400, "Item not found."));
};
