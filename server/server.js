const express = require("express");
const post_routes = require("./routes/post_req");
const connectDb = require("./db/conn");

const app = express();
const cors = require("cors");

require("dotenv").config({path: "./config.env"});
const port = process.env.PORT || 5000;

connectDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// app.use((req, res, next) => {
//     console.log(req.path, req.method)
//     next()
// })

// Handle the various routes
post_routes(app)

// Get driver connection
// const dbo = require("./db/conn");

app.listen(port, () => {
    // Perform Database Connection when server starts
    // dbo.connectToServer(function(err) {
    //     if(err) console.error(err);
    // });
    console.log(`Server is running on port: ${port}`);
});