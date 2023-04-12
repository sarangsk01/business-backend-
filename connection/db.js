const mongoose = require('mongoose');
const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;
const DATABASE = process.env.DATABASE;
const DB = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.dj4jshn.mongodb.net/${DATABASE}?retryWrites=true&w=majority`;
const connectDB = async () => {
  await mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connected to database');
    })
    .catch((err) => console.log('database not connected'));
};
module.exports = connectDB;
