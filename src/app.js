const express = require("express");

const coinName = require("./routes/coinName.js");
const cryptoData = require("./routes/coinMarket.js");
const bodyParser = require("body-parser");
let mongoConnect = require("./util/database");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cryptoData);
app.use(coinName);

// app.listen(3900, () => {
//   console.log("Server -> 3900");
// });

mongoConnect = (client) => {
  app.listen(3900, (req, res) => {
    console.log("app listening at port no 3900");
  });
};
