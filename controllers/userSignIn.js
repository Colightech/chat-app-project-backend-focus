const userModel = require("../models/UserModel")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")


const userSignIn = async (req, res) => {

    try {
        const { email, password } = req.body

        const userExist = await userModel.findOne({email})
        if (!userExist) {
            return res.status(400).json({
                message : `User with ${email} does not exist`,
                error : true,
            })
        }

        const passCompare = await bcryptjs.compare(password, userExist.password)
        if (!passCompare) {
            return res.status(400).json({
                message : "Wrong Password",
                error : true,
            })
        }

        const token = jwt.sign({ id : userExist._id }, process.env.SECRET_KEY, { expiresIn : "1d"})
        return res.status(200).json({
            message : "User logged in Successfully",
            success : true,
            token,
            user : {
                id : userExist._id,
                email : userExist.email,
            },
        })

    } catch (error) {
        return res.status(500).json({
            message : error.message || error,
            error : true,
        })
    }
}

module.exports = userSignIn