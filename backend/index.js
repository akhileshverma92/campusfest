require('reflect-metadata');
const express = require('express');
const cors = require('cors');
const RegisteredUserDetails = require('./src/entity/eventRegisteredUserDetails.js');
const AppDataSource = require('./data-source');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());  // Add body-parser middleware

AppDataSource.initialize().then(() => {
  console.log("Connected to the database");

  // Define routes
  app.get('/', (req, res) => {
    res.send('Hello World');
  });

  app.post('/register', async (req, res) => {
    try {
        const {name, email, event } = req.body;
        const attendeeId = uuidv4();
      const registeredUser = AppDataSource.getRepository(RegisteredUserDetails).create({
        attendeeId,
        attendeeName: name,
        attendeeEmail: email,
        eventName: event,
      });

      const result = await AppDataSource.getRepository(RegisteredUserDetails).save(registeredUser);
      
      res.status(201).json({message: "success"});
    } catch (error) {
      console.error("Error saving registration:", error);
      res.status(500).json({ message: "Server error", error });
    }
  });

  // Start the server
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });

}).catch(error => console.log("DataSource initialization error: ", error));
