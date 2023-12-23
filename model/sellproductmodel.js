const mongoose = require('mongoose');

const sellproductmodel = new mongoose.Schema({
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

  const sellproduct = mongoose.model('sellproduct', sellproductmodel);

  module.exports = sellproduct