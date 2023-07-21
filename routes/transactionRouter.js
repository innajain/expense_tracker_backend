const {
  addTransaction,
  getAllTransactions,
  deleteTransaction,
  getTransactionByID,
  searchTransaction,
  updateTransaction
} = require("../controllers/transactions/Export")

transactionRouter = require("express").Router();
model = require("../db/Models/transactionsModel");

transactionRouter.get("/all", getAllTransactions);
transactionRouter.post("/add_transaction", addTransaction);
transactionRouter.get("/transaction/:id", getTransactionByID);
transactionRouter.delete("/del_transaction", deleteTransaction);
transactionRouter.put("/transaction/:id/update", updateTransaction);
transactionRouter.get("/search", searchTransaction);



module.exports = transactionRouter;
