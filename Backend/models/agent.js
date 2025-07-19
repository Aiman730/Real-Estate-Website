//models/agent.js
const mongoose = require('mongoose');
const { Schema } = mongoose; // Add this line to destructure Schema from mongoose

const agentSchema = new Schema({
  name: { type: String, required: true },
  profilePic: { type: String },
// Correctly define the properties field
  rating: { type: Number },
  nationality: { type: String },
  location: { type: String },
  language: { type: String },
  email: { type: String, required: true, match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ },
  phoneNo: { type: String },
});

const Agent = mongoose.model('Agent', agentSchema); // Create the model

module.exports = Agent;
