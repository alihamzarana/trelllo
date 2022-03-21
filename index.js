const express = require("express");
const app = express();

const db = require("./models");
const columnRoute = require("./routes/columnRoute");
const cardRoute = require("./routes/cardRoute");

const PORT = 3001;
const bodyParser = require("body-parser");
const cors = require("cors");

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
