const mongoose = require('mongoose');
const buyermodel = new mongoose.Schema({
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

  const buyer = mongoose.model('buyer', buyermodel);

  module.exports = buyer