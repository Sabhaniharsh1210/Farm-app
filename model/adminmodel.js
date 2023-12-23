const mongoose = require('mongoose');

const adminmodel = new mongoose.Schema({
    name:{type: String},
    email:{type: String},
    password:{type: String}

  });

  const admin = mongoose.model('admin', adminmodel);

  module.exports = admin