const express = require("express");
const router = express.Router();

router.post("/process", (req, res) => {
  const { prompt, modelType } = req.body;
  // mock response for now, e.g., step-by-step output
  const response = {
    output:
      "Generated output based on " + modelType + " using Chain of Thought.",
  };
  res.json(response);
});

module.exports = router;
