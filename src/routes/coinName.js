const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/coinName/:token", async (req, res) => {
  const coin_name = req.params.token;
  const { data: allCoins } = await axios.get(
    `https://api.coingecko.com/api/v3/coins/list?include_platform=true`
  );

  const coin = allCoins.find((coin) => coin.symbol === coin_name);

  res.send(
    coin
      ? coin.id
      : { error: "Error: No Coin found for given symbol!", code: 404 }
  );
});

module.exports = router;
