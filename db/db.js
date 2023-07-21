const mongoose = require("mongoose");

const dBConnect = async () => {
  try {
    mongoose.set("strictQuery", false);
    db = await mongoose.connect(process.env.MONGO_URL, {
      dbName: process.env.dbName,
    });
    console.log("Database connected");
  } catch (error) {
    console.log("Error: database not connected");
  }
};

module.exports = dBConnect;
