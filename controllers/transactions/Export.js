const { addTransaction } = require("./add");
const { getAllTransactions } = require("./all");
const { deleteTransaction } = require("./delete");
const { getTransactionByID } = require("./getById");
const { searchTransaction } = require("./search");
const { updateTransaction } = require("./update");

module.exports = {
    addTransaction,
    getAllTransactions,
    deleteTransaction,
    getTransactionByID,
    searchTransaction,
    updateTransaction
}