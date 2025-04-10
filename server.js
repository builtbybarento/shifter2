const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-sesssion");
const MongoStore = require("connect-mongo");
const methodOverride = require("method-override")
const flash = require("express-flash")
const logger = require("morgan");

const connectDB = require("./config/database");
const mainRoutes = require("./routes/main");
const postRoutes = require("./routes/posts");
const commentRoutes = require("./routes/comments");

require("dotenv").config({path: ".config/.env"})

connectDB
