const express = require('express');
const router = express.Router();
const About = require('../models/About');

// GET /api/about
router.get('/', async (req, res) => {
  try {
    const about = await About.findOne().lean();
    if (!about) return res.json({});
    res.json(about);
  } catch (err) {
    console.error('Error GET /api/about:', err);
    res.status(500).json({ error: 'Error interno' });
  }
});

module.exports = router;
