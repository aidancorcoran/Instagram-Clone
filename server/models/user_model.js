const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    Name: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true,
    },
    Photo: {
        type: Buffer,
    },
    PhotoType: {
        type: String,
    },
    Followers: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
    Following: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
});

module.exports = mongoose.model("User", userSchema);