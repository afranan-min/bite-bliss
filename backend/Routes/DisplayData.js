const express = require('express')
const router = express.Router()
const FoodItem = require('../models/FoodItem');
const FoodCategory = require('../models/FoodCategory');
router.get('/foodData',async(req,res)=>{
    try {
        //console.log(global.foodCategory)
        const foodItems = await FoodItem.find();
        const categories = await FoodCategory.find();
        res.send([foodItems,categories])
    } catch (error) {
        console.log(error.message)
        res.send("server error")        
    }
})
module.exports = router;