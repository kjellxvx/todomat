require("dotenv").config();
const PocketBase = require("pocketbase/cjs");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// const pb = new PocketBase("http://127.0.0.1:8090");
const pb = new PocketBase("http://185.162.250.233:10017");

let user_data = {};

// POST endpoint for saving data
app.post("/save", async (req, res) => {
  const { data, todos, token } = req.body;

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
      // generate token
      function makeid(length) {
        let result = "";
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
          );
          counter += 1;
        }
        return result;
      }

      const new_token = "TODOMAT" + makeid(6);

      user_data[new_token] = {
        token: new_token,
        data: { ...data },
        todos: { ...todos },
      };

      const record = await pb
        .collection("user_data")
        .create(user_data[new_token]);
      console.log("Saved data using new record: " + new_token);
      console.log(user_data[new_token]);
      res.status(200).json({
        message: "Saved new data",
        token: new_token,
        userData: user_data[new_token],
      });

      // if user has a token update the data using the token
    } else {
      user_data[token] = {
        token: token,
        data: { ...data },
        todos: { ...todos },
      };

      // get id
      const entry = await pb
        .collection("user_data")
        .getFirstListItem('token="' + token + '"', {
          expand: "relField1,relField2.subRelField",
        });

      const record = await pb
        .collection("user_data")
        .update(entry.id, user_data[token]);
      console.log("Updated record: " + token);
      console.log(user_data[token]);
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
    return res.status(400).json({ error: "Invalid userToken" });
  }

  try {
    // Authenticate with password
    const authData = await pb.admins.authWithPassword(
      process.env.PB_MAIL,
      process.env.PB_PW
    );

    /*const userData = await pb.collection("user_data").getOne(token, {
      expand: "relField1,relField2.subRelField",
    });*/

    const userData = await pb
      .collection("user_data")
      .getFirstListItem('token="' + token + '"', {
        expand: "relField1,relField2.subRelField",
      });

    // console.log("userData requested by user: " + token);
    return res.status(200).json({ userData });
  } catch (error) {
    res.status(400).json({ error: "Invalid userToken" });
  }
});

// Start the server
app.listen(3333, () => {
  // console.log("Server is running on port 3333");
});
