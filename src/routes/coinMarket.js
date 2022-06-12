const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/coinMarket/:token", async (req, res) => {
  const { data: name_response } = await axios.get(
    `http://localhost:3900/coinName/${req.params.token}`
  );
  // console.log(name_response);
  if (name_response.error) {
    res.send(name_response);
    return;
  }

  const { type, date } = req.query;
  const coin = name_response;

  const response = await axios.get(
    `https://api.coingecko.com/api/v3/coins/${coin}/market_chart/range?vs_currency=usd&from=1199219911&to=${
      new Date().getTime() / 1000
    }`
  );

  const formatDate = (date) =>
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

  for (let item2 of response.data[type]) {
    let time = new Date(item2[0]);
    if (formatDate(time) === date) {
      return res.send(
        `the ${type} of ${coin} coin at ${date} is : ${item2[1]}`
      );
    }
  }
});

module.exports = router;
