const userModel = require("../models/UserModel")
const bcrypyjs = require("bcryptjs")


const userSignUp = async (req, res) => {

    try {

        const { name, email, password } = req.body

        //Validate Email Format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                message : "Invalid Email Format",
                error : true,
            })
        }

        //Check if Email Exist
        const emailExist = await userModel.findOne({email})
        if (emailExist) {
            return res.status(400).json({
                message : `User With Email ${email} Already Exist`,
                error : true,
            })
        }

        // Validate Password
        const passSpecialRegex = /^[!@#$%^&*(),.?":{}|<>]/; // First character must be a special character
        const passUpperRegex = /[A -Z]/; //use at least one upper case
        const passNumberRegex = /[0-9]/; // Use at least one number

        if (password.length < 8 || !passSpecialRegex.test(password) || !passUpperRegex.test(password) || !passNumberRegex.test(password)) {
            return res.status(400).json({
                message : "Password must be 8 character long and include at least one uppercase letter and number",
                error : true,
            })
        }
        
        // Encrypt Password
        const salt = await bcryptjs.genSalt(10)
        const passEncrypt = await bcrypyjs.hash(password, salt)

        // Create The new User Account
        const user = await new userModel({
            name,
            email,
            password : passEncrypt,
        })

        const saveUser = await user.save()

        return res.status(201).json({
            message : "User Register Successfully",
            data : saveUser,
            success : true,
        })

    } catch (error) {
        res.status(500).json({
            message : error.message || error,
            error : true,
        })
    }
}