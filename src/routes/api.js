const express = require("express");
const router = express.Router();

router.use(express.json());

router.post("/", (req, res) => {
  const body = req.body;
  console.log(body);
  res.end();
});

router.get("/", (req, res) => {
    const message = req.query.message;
  res.send({ message});
});

module.exports = router;
