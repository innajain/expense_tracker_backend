exports.searchByTags = (req) => {
  let { tags } = req.query;
  tagsObject = {};
  if (tags) {
    tags = tags.split(",");
    tagsObject = { $in: tags };
  }
  if (Object.keys(tagsObject).length) return { tags: tagsObject };
  return {};
};
