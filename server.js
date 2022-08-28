const express = require("express");
const app = express();
const PORT = 8700;
const mongoose = require("mongoose");
const connectDB = require("./config/database");
const homeRoutes = require("./routes/home");
const editRoutes = require("./routes/edit");
// const TodoTask = require("./models/TodoTask");
require('dotenv').config({path: './config/.env'})



connectDB()

//Set Middleware
app.set("view engine", "ejs");
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));

//Set Routes
app.use('/',homeRoutes)
app.use('/edit',editRoutes)



//listen for requests
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));