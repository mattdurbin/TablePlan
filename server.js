const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

// Set up Sequelize with your database connection details
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

// Define a simple model (replace with your actual model)
const Guest = sequelize.define('Guest', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Synchronize the model with the database
sequelize.sync();

// Example route
app.get('/api/guests', async (req, res) => {
  const guests = await Guest.findAll();
  res.json(guests);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
