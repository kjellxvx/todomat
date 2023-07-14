require("dotenv").config();
const PocketBase = require("pocketbase/cjs");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const pb = new PocketBase("http://185.162.250.233:10017");

let user_data = {};

// POST endpoint for saving data
app.post("/save", async (req, res) => {
  const { data, todos, token } = req.body;

  user_data[token] = {
    data: { ...data },
    todos: { ...todos },
  };

  // handle invalid requests
  if (!data || !todos) {
    return res.status(400).json({ error: "Invalid request" });
  }

  try {
    // Authenticate with password
    const authData = await pb.admins.authWithPassword(
      process.env.PB_MAIL,
      process.env.PB_PW
    );

    // if user has no token create new record, save data and return the record.id to the client
    if (token == false) {
      const record = await pb.collection("user_data").create(user_data);
      console.log("Saved data using new record: " + record.id);
      res.status(200).json({
        message: "Saved new data",
        token: record.id,
        userData: user_data[token],
      });
      // if user has a token update the data using the token
    } else {
      const record = await pb.collection("user_data").update(token, user_data);
      console.log("Updated record: " + token);
      res.status(200).json({
        message: "Updated data",
        token: token,
        userData: user_data[token],
      });
    }
    pb.authStore.clear();
  } catch (error) {
    console.error("Error creating record:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET endpoint for retrieving data
app.get("/retrieve", async (req, res) => {
  const { token } = req.query;

  if (!token) {
    return res.status(400).json({ error: "Invalid request" });
  }

  try {
    // Authenticate with password
    const authData = await pb.admins.authWithPassword(
      process.env.PB_MAIL,
      process.env.PB_PW
    );

    // Check if the token exists in the user_data
    if (token in user_data) {
      const { data, todos } = user_data[token];
      return res.status(200).json({ data, todos });
    }

    res.status(404).json({ error: "Data not found" });
  } catch (error) {
    console.error("Error during authentication:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
app.listen(3333, () => {
  console.log("Server is running on port 3333");
});
