// app.js
const express = require('express');
const mongoose = require('mongoose');
const contactRoutes = require('./routes/contactRoutes'); // Import the routes
require('dotenv').config();


const app = express();

app.use(express.json());

// Use the contact routes for any requests going to '/api/contacts'
app.use('/api/contacts', contactRoutes);

// Basic route for home page
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the contacts API for Isaac Rodriguez' });
});

// Define more routes here later...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

 mongoose.connect(process.env.MONGODB_URI)
   .then(() => console.log('Connected to MongoDB...'))
   .catch(err => console.error('Could not connect to MongoDB...', err));

