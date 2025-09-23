const mongoose = require('mongoose');
require('dotenv').config({path: '../.env'});

const connectDB = async () => {
  try{

    await mongoose.connect(process.env.CONNECTION_STRING, {
      dbName: process.env.DB_NAME
    });
    console.log('Database connected successfully');

  }catch(err){
    console.error('Database connection error:', err);
  }
}

module.exports = {connectDB};