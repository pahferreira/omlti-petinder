const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//Importing Files to handle requests of specific route
const users = require("./routes/api/users");
const pets = require("./routes/api/pets");

//Creating a new Express Application
const app = express();
//Choosing the port
const port = process.env.PORT || 3000;

//Connecting to database
const db = require("./configs/keys").mongoURI;
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("Database Connected."))
  .catch(err => console.log(err));

//Adding Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes
app.use("/users", users);
app.use("/pets", pets);

app.listen(port, () => console.log(`Server in port: ${port}`));
