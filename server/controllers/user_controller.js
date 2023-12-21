const User = require("../models/user_model");

// Create a new user account
const createUser = async (req, res) => {
    const {Name, Email, Password} = req.body
    try{
        const isExistingUser = await User.findOne({Email: Email})

        if(isExistingUser) {
            res.status(400).json("Error: User already exists")
        }
        else {
            const user = await User.create({Name, Email, Password})
            res.status(200).json(user)
        }
    } catch(error) {
        res.status(400).json({error: error.message})
    }
} 

// Follow another user

// Unfollow another user

// Search a user

module.exports = {
    createUser
}