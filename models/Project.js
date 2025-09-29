const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  repo: String,
  demoUrl: String,
  technologies: [String],
  imageUrl: String
});

module.exports = mongoose.model('Project', ProjectSchema);
