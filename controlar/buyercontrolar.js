// local storage required
const storage = require('node-persist');

// jwt required

var jwt = require('jsonwebtoken');

// required buyer model

const buyer = require('../model/buyermodel')

// buyer register

const register = async (req, res) => {
    let check = await buyer.find({ "email": req.body.email })

    if (check.length == 0) {
        let data = await buyer.create(req.body)
        res.status(200).json({
            status: "success",
            data
        })

    }
    else {
        res.status(200).json({
            status: "user already register"
        })
    }
}

const login = async (req, res) => {
    let data = await buyer.find({
        $or: [
            { "username": req.body.username },
            { "email": req.body.username }
        ]
    })
    // console.log(data[0])
    await storage.init()
    let x = await storage.getItem('buyerid')

    if (x == undefined) {
        if (data.length == 1) {
            if (data[0].password == req.body.password) {

                await storage.setItem('buyerid', data[0].id)
                var token = jwt.sign({ id: data[0].id }, 'buyer');
                res.status(200).json({
                    status: "success",
                    token
                })
            }
            else {
                res.status(200).json({
                    status: "please check your password"
                })
            }
        }
        else {
            res.status(200).json({
                status: "please check your email or password"
            })
        }
    }
    else {
        res.status(200).json({
            status: "buyer is already login"
        })
    }
}

const logout = async (req, res) => {
    await storage.init()
    await storage.removeItem('buyerid')
    res.status(200).json({
        status: "success"
    })
}

const forgate = async (req, res) => {
    let data = await buyer.find({
        $or: [
            { "username": req.body.username },
            { "email": req.body.username }
        ]
    })

    let x = "0987654321"
    let otp = ""

    for (let i = 0; i < 6; i++) {
        let y = Math.floor(Math.random() * x.length)
        otp = otp.concat(y)

    }
    let obj = {
        otp: otp,
        id: data[0].id
    }
    res.cookie("buyer", obj)

    res.status(200).json({
        status: "success",
        data,
        otp
    })

}


const check_otp = (req, res) => {

    if (req.cookies.buyer.otp == req.body.otp) {
        res.status(200).json({
            status: "success"
        })
    }
    else {
        res.status(200).json({
            status: "please enter correct otp"
        })
    }

}

const update_password = async (req, res) => {
    await buyer.findByIdAndUpdate(req.cookies.buyer.id, { "password": req.body.password })

    res.status(200).json({
        status: "success"
    })
}

const update_profile = async (req, res) => {
    let result = await buyer.findById(req.params.id)
    let name, username, email, password, contact

    req.body.name ? name = req.body.name : name = result.name
    req.body.username ? username = req.body.username : username = result.username
    req.body.email ? email = req.body.email : email = result.email
    req.body.password ? password = req.body.password : password = result.password
    req.body.contact ? contact = req.body.contact : contact = result.contact

    await buyer.findByIdAndUpdate(req.params.id, {
        "name": name,
        "username": username,
        "email": email,
        "password": password,
        "contact": contact
    })



    res.status(200).json({
        status: "success"
    })

}


module.exports = {
    register,
    login,
    logout,
    forgate,
    check_otp,
    update_password,
    update_profile
}