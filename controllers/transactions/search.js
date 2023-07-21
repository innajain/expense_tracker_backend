const transactionsModel = require("../../db/Models/transactionsModel");

exports.searchTransaction = async (req, res) => {
  let queryObj = {};
  queryObj = { ...searchByDate(req), ...searchByTitle(req)};
  try {
    if (Object.keys(date).length==0){
       res.json( [])
       return
      }
    answer = await transactionsModel.find(queryObj).sort({date: 1});
    res.json(answer);
  } catch (error) {
    res.status(500).send("error occured");
  }
};

const searchByDate = (req) => {
  let { startDate, endDate } = req.query;
  date = {};
  if (startDate) {
    startDate = new Date(startDate);
    date.$gte = startDate;
  }
  if (endDate) {
    endDate = new Date(endDate);
    date.$lte = endDate;
  }
  if (Object.keys(date).length) return { date: date };
  return {};
};

const searchByTitle = (req) => {
  let { title} = req.query;
  titleObj={}
  if (title){
    titleObj= { $regex: title, $options: "i" }
  }
  if (Object.keys(titleObj).length) return { title: titleObj };
  return {};
};
