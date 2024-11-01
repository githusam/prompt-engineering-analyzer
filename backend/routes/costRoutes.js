const express = require("express");
const router = express.Router();

router.get("/calculate", (req, res) => {
  const { tokens, modelType } = req.query;
  const rates = { "GPT-4": 0.03, "GPT-3.5": 0.01 };
  const cost = tokens * rates[modelType];
  res.json({ cost });
});

module.exports = router;
