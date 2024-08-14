const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://gofood:1234@cluster0.gch8tfe.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
    try {
        // Attempt to connect to MongoDB
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB");

        // Fetch data from the "food_items" collection
        const fetched_data = await mongoose.connection.db.collection("items").find({}).toArray();
        //console.log("Fetched data:", fetched_data);
        const foodCategory_data = await mongoose.connection.db.collection("categories").find({}).toArray();
        global.food_items=fetched_data;
        global.foodCategory=foodCategory_data;
        
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

module.exports = mongoDB;
