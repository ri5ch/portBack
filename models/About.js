const mongoose = require('mongoose');

const SocialSchema = new mongoose.Schema({
  name: String,
  url: String,
  icon: String
}, { _id: false });

const AboutSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: String,
  location: String,
  email: String,
  phone: String,
  bio: String,
  avatarUrl: String,
  resumeUrl: String,
  socials: [SocialSchema],
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('About', AboutSchema);
