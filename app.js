const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const homeRouter = require("./routes/home");
const addNewRouter = require("./routes/addNew");

const MONGODB_URI = "mongodb+srv://ankitbuppy:buppybuppy@cluster0.cugpg.mongodb.net/handaji";

app.use(cors());
app.use(bodyParser.json());

app.use(homeRouter);
app.use(addNewRouter);

mongoose.connect(MONGODB_URI,{useNewUrlParser: true, useUnifiedTopology: true}).then(result => {
    console.log("Data base connection successfully");
    app.listen(8080);
}).catch(err => {
    console.log("Error connecting to the database");
    console.log(err);
})