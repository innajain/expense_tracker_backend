const transactionsModel = require("../../db/Models/transactionsModel");
const { searchByDate } = require("../../utils/search functions/searchByDate");
const { searchByTags } = require("../../utils/search functions/searchByTags");
const { searchByTitle } = require("../../utils/search functions/searchByTitle");
const { searchByType } = require("../../utils/search functions/searchByType");
const { sendSuccess, sendFailure } = require("../../utils/sendStandardOutput");



exports.searchTransaction = async (req, res, next) => {
  let queryObj = {};
  queryObj = { ...searchByDate(req), ...searchByTitle(req), ...searchByTags(req), ...searchByType(req) };

  try {
    answer = await transactionsModel.find(queryObj).sort({ date: 1 });
    sendSuccess(res, 200, answer);
  } catch (error) {
    sendFailure(res, 500, "Unexpected error occured.");
  }
};