const express = require("express");
const session = require("express-session");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const router = require("./router");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use('/assets', express.static(path.join(__dirname, '/assets')))

app.use(
  session({
    secret: uuidv4(), 
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



app.listen(3000, function () {
  console.log("server is running on port 8080");
});