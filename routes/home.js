const express = require('express')
const router = express.Router()
// const homeController = require('../controllers/home')

router.get('/', (req,res)=> res.send("cool")) 

module.exports = router