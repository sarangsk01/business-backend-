var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var bcrypt = require('bcrypt');

var userSchema = new Schema(
  {
    name: { type: String, required: true },
    mobile: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    subject: { type: String, required: true, minlength: 5 },
    message: { type: String, required: true, minlength: 5 },
  },
  { timestamps: true }
);

// userSchema.pre('save', function (next) {
//   console.log(this);
//   if (this.password && this.isModified('password')) {
//     bcrypt.hash(this.password, 10, (err, hashed) => {
//       if (err) return next(err);
//       this.password = hashed;
//       return next();
//     });
//   } else {
//     next();
//   }
// });

// userSchema.methods.verifyPassword = function (password, cb) {
//   bcrypt.compare(password, this.password, (err, result) => {
//     return cb(err, result);
//   });
// };

module.exports = mongoose.model('User', userSchema);
