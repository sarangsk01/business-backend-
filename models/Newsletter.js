var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newsletterSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Newsletter', newsletterSchema);
