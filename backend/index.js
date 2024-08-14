const express = require('express');
const cors = require('cors'); // Import CORS middleware
const app = express();
const port = 5000;
const mongoDB = require("./db");

// Connect to MongoDB
mongoDB();

// Middleware to enable CORS
app.use(cors());

// Parse incoming JSON requests
app.use(express.json());
//testing git
// Routes
app.use('/api', require("./Routes/CreatUser"));
app.use('/api', require("./Routes/DisplayData"));
app.use('/api', require("./Routes/OrderData"));
app.use('/api', require("./Routes/AddCategory")); // Assuming you have a route for adding categories
app.use('/api', require("./Routes/AddFoodItems"));
app.use('/api', require("./Routes/OrdersData"));
// Default route
app.get('/', (req, res) => {
  res.send('Hello World!')
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
