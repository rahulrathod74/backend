const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/prouductRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB URI (Replace with your MongoDB URI)
const MONGODB_URI = 'mongodb://localhost:27017/myDatabase'; // Replace `myDatabase` with your database name

// Debugging MongoDB URI
console.log('MongoDB URI:', MONGODB_URI);

// Database connection
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

// Server
const PORT = 4000; // Set your port here
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
