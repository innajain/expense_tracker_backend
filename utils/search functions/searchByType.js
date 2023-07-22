exports.searchByType = (req) => {
    let { type } = req.query;
    typeObj = {};
    
    if (type) {
  
      typeObj = type;
    }
    if (Object.keys(typeObj).length) return { type: typeObj };
    return {};
  };