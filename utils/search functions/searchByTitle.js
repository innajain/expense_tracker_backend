exports.searchByTitle = (req) => {
    let { title } = req.query;
    titleObj = {};
    
    if (title) {
  
      titleObj = { $regex: title, $options: "i" };
    }
    if (Object.keys(titleObj).length) return { title: titleObj };
    return {};
  };