const mongoose = require('mongoose');

const productmodel = new mongoose.Schema({
    product:{
      type: String,
      required: [true, 'Please enter product']
    },
    qty:{
      type: Number,
      required: [true, 'Please enter qty']
    },
    price:{
      type: Number,
      required: [true, 'Please enter price']
    },
    discription:{
      type: String,
      required: [true, 'Please enter discription']
    },
    userid:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: [true, 'Please enter userid']
    }
  
  });

  const product = mongoose.model('product', productmodel);

  module.exports = product