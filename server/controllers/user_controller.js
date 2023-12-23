const User = require("../models/user_model");

// Create a new user account
const createUser = async (req, res) => {
    const {Name, Email, Password} = req.body;
    try{
        const isExistingUser = await User.findOne({Email: Email});

        if(isExistingUser) {
            res.status(400).json("Error: User already exists");
        }
        else {
            const user = await User.create({Name, Email, Password});
            res.status(200).json(user);
        }
    } catch(error) {
        res.status(400).json({error: error.message});
    }
} 

// Follow another user
const followUser = async (req, res) => {
    const userToFollow = await User.findById(req.body.followId);
    console.log(userToFollow);
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.body.followId,
            {
                $push: {Followers: userToFollow._id},
            },
            {
                new: true,
            }
        );
        console.log(updatedUser);
        if(!updatedUser) {
            res.status(400).json("User not found");
        }

        res.status(200).json(updatedUser);
    } catch(error) {
        console.error(error);
        res.status(400).json({error: error.message});
    }
}

// Unfollow another user
const unfollowUser = async (req, res) => {
    const userToUnFollow = await User.findById(req.body.followId);
    console.log(userToUnFollow);
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.body.followId,
            {
                $pull: {Followers: userToUnFollow._id},
            },
            {
                new: true,
            }
        );

        if(!updatedUser) {
            res.status(400).json("User not found");
        }

        res.status(200).json(updatedUser);
    } catch(error) {
        console.error(error);
        res.status(400).json({error: error.message});
    }
}


// Search a user

module.exports = {
    createUser,
    followUser,
    unfollowUser
};