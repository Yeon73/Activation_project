console.log('Initializing server...');

// Load required modules
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database');

// Load environment variables
dotenv.config({ path: './.env' });
console.log('Environment variables loaded:', process.env.MONGO_URI);

if (!process.env.MONGO_URI) {
  console.error('MONGO_URI is not defined. Check your .env file.');
  process.exit(1);
}

// Initialize Express app
const app = express();

// Middleware (example for parsing JSON)
app.use(express.json());

// Connect to MongoDB
console.log('Connecting to MongoDB...');
connectDB();

// Define a test route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
