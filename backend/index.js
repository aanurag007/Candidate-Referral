const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const candidateRoutes = require('./routes/candidateRoutes');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));

// Logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use('/api', candidateRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));