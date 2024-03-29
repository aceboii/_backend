require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const errorHandler = require("./middleware/errorHandler");
const routes = require("./routes/index");

mongoose
  .connect(process.env.DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Successfully connected to the DB"))
  .catch((err) =>
    console.error("Error while connecting to the database: ", err)
  );

const app = express();

app.use(cors({origin: process.env.FRONT_END_HOST}));
app.use(express.json());
app.use("/api", routes);
app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`successfully connected to port ${PORT}`);
});
