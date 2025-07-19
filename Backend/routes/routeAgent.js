const express = require('express');
const Agent = require('../models/agent');
const Joi = require('joi');
const router = express.Router();

// Validation Schema for Agent
const agentValidationSchema = Joi.object({
  name: Joi.string().required(),
  profilePic: Joi.string().optional(),
  sale: Joi.number().integer().min(0).required(),
  rent: Joi.number().integer().min(0).required(),
  nationality: Joi.string().required(),
  location: Joi.string().required(),
  language: Joi.string().required(),
  email: Joi.string().email().required(),
  phoneNo: Joi.string().required()
});

// Middleware for Request Validation
const validateAgent = (req, res, next) => {
  const { error } = agentValidationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};
//add
router.post('/add', validateAgent, async (req, res) => {
    const { name, profilePic, rating, nationality, location, language, email, phoneNo } = req.body;
    console.log('Attempting to insert data:', req.body);
  
    // Check for existing agent by email
    const existingAgent = await Agent.findOne({ email });
    if (existingAgent) {
      return res.status(400).json({ message: 'Agent with this email already exists' });
    }
  
    const newAgent = new Agent({
      name,
      profilePic,
      rating,
      nationality,
      location,
      language,
      email,
      phoneNo
    });
  
    try {
      const savedAgent = await newAgent.save();
      res.status(201).json(savedAgent);
    } catch (err) {
      console.error('Error adding agent:', err); // Detailed error log
      res.status(500).json({ message: 'Error adding agent', error: err.message });
    }
  });
  

// Get All Agents
router.get('/getAgents', async (req, res) => {
  try {
    const agents = await Agent.find();
    res.status(200).json(agents);
    res.status(200).json({ message: 'Agents fetched successfully' });

  } catch (err) {
    res.status(500).json({ message: 'Error fetching agent data', error: err.message });
  }
});

// Get Agent by ID (Updated from using name)
router.get('/:id', async (req, res) => {
  const { id } = req.params;  // Get the ID from URL parameter
  
  try {
    const agent = await Agent.findById(id);  // Search for agent by ID
    if (!agent) {
      return res.status(404).json({ message: "Agent not found" });
    }
    res.json(agent);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});


// Export router
module.exports = router;
