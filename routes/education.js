const express = require('express');
const router = express.Router();
const Education = require('../models/Education');

router.get('/', async (req, res) => {
  try {
    const education = await Education.find().lean();
    res.json(education);
  } catch (err) {
    res.status(500).json({ error: 'Error interno' });
  }
});

module.exports = router;
