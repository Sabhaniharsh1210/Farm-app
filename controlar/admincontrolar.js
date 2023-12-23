// admin model require
const admin = require('../model/adminmodel')

// admin login

const login = async(req,res) => {
    let id = "6583d3e0e0a44d735bab3cef";
    let data = await admin.findById(id)

    res.status(200).json({
        status:"success"
    })
}

module.exports = {
    login
}