const mongoose = require("mongoose");

const connectionString = process.env.connectionString;

const databaseConnection = () => {
  mongoose
    .connect(connectionString)
    .then(() => {
      console.log("Database Connection Successful");
    })
    .catch((err) => {
      console.log(err, "err");
    });
};

module.exports = databaseConnection;
