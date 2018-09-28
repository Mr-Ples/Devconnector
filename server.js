//Hiring the manager
const express = require("express");
const app = express();

//Routes
const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
const profile = require("./routes/api/profile");

//database
const mongoose = require("mongoose");
//DB config
const db = require("./config/keys").mongoURI;
//Connect to DB
mongoose
  .connect(db)
  .then(() => console.log("mongoDB connected"))
  .catch(err => console.log(err));

//choosing which resturant to use
const port = process.env.PORT || 5000;
//Got shirt and shoes
app.use(function(req, res, next) {
  console.log("Request: ", req), console.log("Response: ", res), next();
});

app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

//Taking an order
app.get("/", (req, res) => res.send("Hello"));

//Open for business
app.listen(port, () => console.log("Server running on port: " + port));
