require("dotenv/config");

const express = require("express");
const demoRouter = require("./routes/demoRouter");
const databaseConnection = require("./config/config");

const PORT = process.env.PORT || 5001;

const app = express();

databaseConnection();

app.use("/demoRoutes", demoRouter);

app.get("/", (req, res) => {
  res.send("10" + 1);
});

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
