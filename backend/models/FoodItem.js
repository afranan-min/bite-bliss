const mongoose = require('mongoose');

const FoodItemSchema = new mongoose.Schema({
    CategoryName: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    options: [{
        size: String,
        price: Number
    }],
    description: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('items', FoodItemSchema);
