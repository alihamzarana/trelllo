const express = require("express");
const app = express();

const db = require("./models");
const columnRoute = require("./routes/columnRoute");
const cardRoute = require("./routes/cardRoute");

const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });
console.log(`NODE_ENV=${process.env.NODE_ENV}`);
const PORT = process.env.PORT;
const DATABASE_URL= process.env.DATABASE_URL
console.log("PORT", PORT)

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/api/v1", columnRoute);
app.use("/api/v1/card", cardRoute);

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`listening on: http://localhost:${PORT}`);
  });
});
