const express = require('express');
const router = express.Router();
const FoodCategory = require('../models/FoodCategory'); // Ensure this import is correct

// POST route to add a new food category
router.post('/addCategory', async (req, res) => {
    try {
        const { categoryName } = req.body;

        if (!categoryName) {
            return res.status(400).json({ msg: 'CategoryName is required' });
        }

        const existingCategory = await FoodCategory.findOne({ CategoryName: categoryName });
        if (existingCategory) {
            return res.status(400).json({ msg: 'Category already exists' });
        }

        const newCategory = new FoodCategory({
            CategoryName: categoryName
        });

        await newCategory.save();
        res.status(200).json({ msg: 'Category added successfully' });
    } catch (err) {
        console.error('Error adding category:', err.message);
        res.status(500).send('Server Error');
    }
});


module.exports = router;
