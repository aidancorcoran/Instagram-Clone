// Deal with post requests
const userSchema = require("../models/user_model");
const {
    createUser
} = require("../controllers/user_controller");

module.exports = (app) => {
    app.get("/home", (req, res) => {
        res.json("Get users followers posts")
    });
    
    app.get("/userposts", (req, res) => {
        res.json("Get the user's posts and display in grid")
    });

    app.post("/newuser", createUser)
}