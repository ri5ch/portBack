const express = require('express');
const router = express.Router();
const Experience = require('../models/Experience');

router.get('/', async (req, res) => {
  try {
    const experiences = await Experience.find().lean();
    res.json(experiences);
  } catch (err) {
    res.status(500).json({ error: 'Error interno' });
  }
});

module.exports = router;
