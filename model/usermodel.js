const mongoose = require('mongoose');
const usermodel = new mongoose.Schema({
    name:{
      type: String,
      required: [true, 'Please enter name']
    },
    username:{
      type: String,
      required: [true, 'Please enter name']
    },
    email:{
      type: String,
      required: [true, 'Please enter name']
    },
    password:{
      type: String,
      required: [true, 'Please enter name']
    },
    contact:{
      type: Number,
      required: [true, 'Please enter name']
    }
  
  });

  const user = mongoose.model('user', usermodel);

  module.exports = user