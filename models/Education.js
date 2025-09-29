const mongoose = require('mongoose');

const EducationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  school: String,
  startDate: Date,
  endDate: Date,
  description: String
});

module.exports = mongoose.model('Education', EducationSchema);
