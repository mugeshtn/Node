const express = require("express");
const session = require("express-session");//to create session to store session values.
const { v4: uuidv4 } = require("uuid"); //returns object
const path = require("path");

const router = require("./router");

const app = express();

app.use(express.urlencoded({ extended: true })); //parse req.body value

app.set("view engine", "ejs"); //using ejs view engine

app.use('/assets', express.static(path.join(__dirname, '/assets'))) //add static items such as css codes.

app.use( //app level midd
  session({
    secret: uuidv4(), //universally unique identifier;
    resave: false,
    saveUninitialized: true,
  })
);

app.use("/route", router);

app.get("/", (req, res) => {
  if (req.session.user) {
    res.redirect("/home");
  } else {
    res.render("pages/index", { error: null });
  }
});

app.get("/home", (req, res) => {
  if (req.session.user) {
    res.render("pages/home");
  } else {
    res.redirect("/");
  }
});

app.post("/logout", (req, res) => {
  req.session.destroy(function (err) {
    if (err) {
      console.log(err);
      res.send("Error");
    } else {
      console.log("test");
      res.status(200).send('Okay');
    }
  });
});



app.listen(8080, function () {
  console.log("server is running on  http://localhost:8080");
});