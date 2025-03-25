// routes/users.js
const express = require('express');
const router = express.Router();

let ratio = 0.75;
let acc = 1000;

router.get('/', (req, res) => {
  acc = acc * ratio;
  res.send(`Value is: ${acc.toFixed(2)}`); // Added toFixed(2) for cleaner output
});

module.exports = router;