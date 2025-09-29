const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().lean();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: 'Error interno' });
  }
});

module.exports = router;
