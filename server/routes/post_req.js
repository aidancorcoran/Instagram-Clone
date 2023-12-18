// Deal with post requests
const userModel = require("../models/user_model");

module.exports = (app) => {
    app.get("/home", (req, res) => {
        res.json("Get users followers posts")
    });
    
    app.get("/userposts", (req, res) => {
        res.json("Get the user's posts and display in grid")
    });

    app.post("/newuser", async(req, res) => {
        const {Name, Email, Password} = req.body
        try{
            const user = await userModel.create({Name, Email, Password})
            res.status(200).json(user)
        }catch(error) {
            res.status(400).json({error: error.message})
        }
    });
}