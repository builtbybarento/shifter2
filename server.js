const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const methodOverride = require("method-override")
const flash = require("express-flash")
const logger = require("morgan");

const connectDB = require("./config/database");
// const mainRoutes = require("./routes/main");
// const postRoutes = require("./routes/posts");
// const commentRoutes = require("./routes/comments");
const homeRoutes = require("./routes/home")

require("dotenv").config({ path: "./config/.env" });
console.log(process.env.DB_STRING);
connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/', homeRoutes)
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    