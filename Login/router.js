let express = require("express");
let router = express.Router();

const credential = {
  email: "admin@gmail.com",
  password: "admin123",
};

router.post("/submit", (req, res) => {
  const { email, password } = req.body;

  if (email == credential.email && password == credential.password) {
    req.session.user = email;
    res.redirect("/home");
  } else {
    res.render("pages/index", {error: "Invalid credential"});
  }
});

router.post("/check", (req, res) => {
  if(req.session.user) {
    res.send(true);
  } else {
    res.send(false);
  }
})


module.exports = router;
