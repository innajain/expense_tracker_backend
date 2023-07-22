exports.searchByDate = (req) => {
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