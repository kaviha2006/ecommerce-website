const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  phone: String,
  address1: String,
  address2: String,
  city: String,
  state: String,
  zip: String
}, {
  timestamps: true // adds createdAt and updatedAt
});

module.exports = mongoose.model('User', userSchema);
