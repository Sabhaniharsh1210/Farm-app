const mongoose = require('mongoose');

const buyproductmodel = new mongoose.Schema({
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
    buyerid:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'buyer',
      required: [true, 'Please enter buyerid']
    },
    sellerid:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:[true, 'please enter sellerid']
    }
  
  });

  const buyproduct = mongoose.model('buyproduct', buyproductmodel);

  module.exports = buyproduct