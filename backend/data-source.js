const { DataSource } = require('typeorm');
require('dotenv').config();
const RegisteredUserDetails = require("./src/entity/eventRegisteredUserDetails");  

const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: true,    // Set to false in production
  logging: false,
  entities: [RegisteredUserDetails],  // Path to your entity files
  migrations: [],
  subscribers: [],
  ssl: {
    rejectUnauthorized: false, // This might be required for NeonDB
  }
});

module.exports = AppDataSource;
