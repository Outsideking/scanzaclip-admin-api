// config/database.js
require('dotenv').config();

let dbClient;

if (process.env.DB_TYPE === 'mongodb') {
  const mongoose = require('mongoose');
  dbClient = {
    connect: async () => {
      try {
        await mongoose.connect(process.env.MONGO_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log('✅ MongoDB Connected');
      } catch (err) {
        console.error('❌ MongoDB connection error:', err.message);
        process.exit(1);
      }
    },
  };
}

if (process.env.DB_TYPE === 'postgres') {
  const { Pool } = require('pg');
  const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  });

  dbClient = {
    connect: async () => {
      try {
        await pool.connect();
        console.log('✅ PostgreSQL Connected');
      } catch (err) {
        console.error('❌ PostgreSQL connection error:', err.message);
        process.exit(1);
      }
    },
    pool,
  };
}

module.exports = dbClient;
