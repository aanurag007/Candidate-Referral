const Candidate = require('../models/Candidate');

// Add a new candidate
exports.addCandidate = async (req, res) => {
  try {
    const { name, email, phone, jobTitle } = req.body;
    const resumeUrl = req.file ? req.file.path : '';

    const candidate = new Candidate({ name, email, phone, jobTitle, resumeUrl });
    await candidate.save();
    res.status(201).json(candidate);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all candidates
exports.getCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find();
    res.status(200).json(candidates);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update candidate status
exports.updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const candidate = await Candidate.findByIdAndUpdate(id, { status }, { new: true });
    res.status(200).json(candidate);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};