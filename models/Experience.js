const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: String,
  location: String,
  startDate: Date,
  endDate: Date,
  description: String
});

module.exports = mongoose.model('Experience', ExperienceSchema);
