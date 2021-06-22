const axios = require("axios");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      "https://us-central1-prueba-front-280718.cloudfunctions.net/terminaciones"
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(401).json({
      message: error
    });
  }
});

module.exports = router;
