const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
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
  },
  image: {
    data: Buffer, // Store image data as a binary buffer
    contentType: String, // Store the image content type (e.g., 'image/jpeg', 'image/png')
  },
});

module.exports = mongoose.model('User', userSchema);
