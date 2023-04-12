const mongoose = require('mongoose');
const DB =
  'mongodb+srv://kulkarnisarang01:7776021397@cluster0.dj4jshn.mongodb.net/mernbusiness?retryWrites=true&w=majority';
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
