const express = require('express');
const router = express.Router();

const mathFunctions = [
  Math.pow,   
  Math.sign,  
  Math.tanh,   
  Math.trunc   
];

router.get('/', (req, res) => {
  const x = req.query.x ? parseFloat(req.query.x) : Math.random() * 10;
  
  const lastDigit = 4; 
  const fn = mathFunctions[lastDigit % mathFunctions.length];
  const fnName = fn.name;
  
  const y = fn(x);
  
  res.send(`${fnName} applied to ${x.toFixed(2)} is ${y.toFixed(2)}`);
});

module.exports = router;