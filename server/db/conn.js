const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.ATLAS_URI);
    console.log(`MongoDB Connected : ${conn.connection.host}`);
  } catch (err) {
    console.log("error while connecting to your DataBase : ", err);
    process.exit(1);
  }
};

module.exports = connectDB;