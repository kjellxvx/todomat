require('dotenv').config();
import PocketBase from "pocketbase";
const pb = new PocketBase("http://185.162.250.233:10017");

try {
  const authData = await pb.admins.authWithPassword(
    process.env.PB_MAIL,
    process.env.PB_PW
  );
  // Rest of your code
} catch (error) {
  console.error("Error during authentication:", error);
  // Handle the error appropriately (e.g., show an error message to the user)
}


const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import the cors module

const app = express();
app.use(bodyParser.json());

// Use CORS middleware
app.use(cors());

// In-memory database to store user data
let database = {};

// POST endpoint for saving data
app.post("/save", (req, res) => {
  const { data, todos, token } = req.body;

  if (!data || !todos || !token) {
    return res.status(400).json({ error: "Invalid request" });
  }

  // Save the data to the database
  database[token] = {
    data: { ...data },
    todos: { ...todos },
  };

  console.log(database[token]);

  res.status(200).json({ message: "Data saved successfully" });
});

// GET endpoint for retrieving data
app.get("/retrieve", (req, res) => {
  const { token } = req.query;

  if (!token) {
    return res.status(400).json({ error: "Invalid request" });
  }

  // Check if the token exists in the database
  if (token in database) {
    const { data, todos } = database[token];
    return res.status(200).json({ data, todos });
  }

  res.status(404).json({ error: "Data not found" });
});

// Start the server
app.listen(3333, () => {
  console.log("Server is running on port 3333");
});
