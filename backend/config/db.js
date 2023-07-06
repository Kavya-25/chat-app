const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

const connectDB = async (username, password) => {
  const URL = `mongodb+srv://kavyasanjeevsingh:kavyA2501@cluster0.7buxq3u.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected `);
  } catch (error) {
    console.log(`Error is : ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
