const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
   unique:false,
  },
  lastname: {
    type: String,
    required: true,
    unique:false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  contact: {
    type: Number,
    required: true,
    unique: true,
  },
 
  password: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model('User', userSchema);
