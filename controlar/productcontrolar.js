// require product model
const product = require('../model/productmodel');

// require user model
const user = require('../model/usermodel');

// require buyer model
const buyer = require('../model/buyermodel')

// require buyproduct model
const buyproduct = require('../model/buyproductmodel')

// require sellproduct model
const sellproduct = require('../model/sellproductmodel')

//  add product by user
const add_product = async (req, res) => {
    let result = await product.find({ "userid": req.body.userid }).where({ 'product': req.body.product })

    if (result.length == 0) {
        let data = await product.create(req.body)
        res.status(200).json({
            status: "success",
            data
        })
    }
    else {
        let qty = result[0].qty + req.body.qty
        let data = await product.findByIdAndUpdate(result[0].id, { "qty": qty, "discription": req.body.discription })
        res.status(200).json({
            status: "success",
            data
        })
    }

}

// purchase product by buyer

const buy_product = async (req, res) => {

    let result = await product.findById(req.params.product_id)

    if (result.qty == 0) {
        res.status(200).json({
            status: "Out of stock",
            result
        })
    }
    else if (result.qty < req.body.qty) {
        res.status(200).json({
            status: "Only " + result.qty + " qty availabel",
            result
        })
    }
    else {
           let obj = {
            product: result.product,
            qty: req.body.qty,
            price: result.price,
            discription: result.discription,
            buyerid: req.body.buyerid,
            sellerid: result.userid
        }
        await product.findByIdAndUpdate(req.params.product_id, { "qty": result.qty - req.body.qty })

        await buyproduct.create(obj)
        await sellproduct.create(obj)

        res.status(200).json({
            status: "success"
        })

    }

}


module.exports = {
    add_product,
    buy_product
}
