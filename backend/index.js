const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const promptRoutes = require("./routes/promptRoutes");
const costRoutes = require("./routes/costRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/prompt", promptRoutes);
app.use("/cost", costRoutes);

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
