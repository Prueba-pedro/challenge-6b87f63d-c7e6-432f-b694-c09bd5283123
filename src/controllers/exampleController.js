const express = require('express');
const router = express.Router();
const exampleService = require('../services/exampleService');

router.get('/', async (req, res) => {
  try {
    const data = await exampleService.getData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;