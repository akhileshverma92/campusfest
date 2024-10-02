const { DataSource } = require('typeorm');
const RegisteredUserDetails = require("./src/entity/eventRegisteredUserDetails");  

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",    // Replace with your PostgreSQL host
  port: 5432,           // Default PostgreSQL port
  username: "postgres", // Replace with your PostgreSQL username
  password: "shivam", // Replace with your PostgreSQL password
  database: "college", // Replace with your PostgreSQL database name
  synchronize: true,    // Set to false in production
  logging: false,
  entities: [RegisteredUserDetails],  // Path to your entity files
  migrations: [],
  subscribers: [],
});

module.exports = AppDataSource;
