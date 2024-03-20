const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const PORT = process.env.PORT;
const mongoUri = process.env.MONGO_URI;

app.use(express.json());
app.use(cors());

mongoose.connect(mongoUri)
.then(() => {
    console.log('MongoDB connected successfully');
}).catch(err => {
    console.error('MongoDB connection error:', err);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});