const router = require("express").Router();

router.get("/", async (req, res) => {
  res.send("we good");
  // Login
});

router.get("/login", async (req, res) => {
  res.send("Login Page for users");
  // Login
});

router.get("/signup", async (req, res) => {
  res.send("Signup Page for users");
  // Signup
});

router.get("/", async (req, res) => {
  res.send("we good");
  //
});

module.exports = router;
