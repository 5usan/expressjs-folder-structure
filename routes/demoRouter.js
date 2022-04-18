const express = require("express");

const router = express.Router();

router.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});

router.get("/blog", (req, res, next) => {
  res.send("Demo router");
});

router.post("/blog", (req, res, next) => {
    res.send("Demo router");
  });

router.get("/about", (req, res, next) => {
  res.send("Demo router About Page");
});

module.exports = router;
