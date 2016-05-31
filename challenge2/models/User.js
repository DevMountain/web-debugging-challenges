var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  twitterId: String,
  facebookId: {type: String},
  googleId: {type: String},
  bnetId: {type: String},
  username: { type: String, required: true, unique: true, maxlength: 20, index: true },
  level: { type: Number, min: 1, max: 100 },
  location: { type: String, maxlength: 40 },
  member: { type: Boolean, default: false },
  updateAt: { type: Date }
});

userSchema.pre('save', function(next) {
 var user = this;
 user.updatedAt = new Date();
 next();
});


module.exports = mongoose.model('User', userSchema);
